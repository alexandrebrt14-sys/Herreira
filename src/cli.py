"""CLI entry point for the Herreira multi-LLM pipeline.

Usage:
  python -m src.cli --vertical fintech collect citation
  python -m src.cli --vertical fintech collect competitor
  python -m src.cli --vertical fintech db export --format csv --output data/daily
  python -m src.cli finops monitor
"""

from __future__ import annotations

import argparse
import logging
import sys
from pathlib import Path


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(name)s — %(message)s",
    datefmt="%Y-%m-%dT%H:%M:%S",
)
logger = logging.getLogger("cli")


# ---------------------------------------------------------------------------
# Sub-commands
# ---------------------------------------------------------------------------

def cmd_collect(args: argparse.Namespace) -> int:
    """Run a collector module for the given vertical."""
    vertical = args.vertical
    module = args.module  # "citation" or "competitor"

    logger.info("collect %s — vertical=%s", module, vertical)

    try:
        from src.config import VERTICALS

        if vertical not in VERTICALS:
            logger.error("Unknown vertical '%s'. Valid: %s", vertical, list(VERTICALS))
            return 1

        if module == "citation":
            from src.collectors.citation_tracker import CitationTracker
            collector = CitationTracker(vertical=vertical)
            results = collector.collect()
            logger.info("Citation tracker: %d records collected for %s", len(results), vertical)

        elif module == "competitor":
            from src.collectors.competitor import CompetitorCollector
            collector = CompetitorCollector(vertical=vertical)
            results = collector.collect()
            logger.info("Competitor collector: %d records collected for %s", len(results), vertical)

        else:
            logger.error("Unknown module '%s'. Valid: citation, competitor", module)
            return 1

    except Exception as exc:
        logger.error("collect %s failed: %s", module, exc, exc_info=True)
        return 1

    return 0


def cmd_db_export(args: argparse.Namespace) -> int:
    """Export the SQLite database to the requested format."""
    vertical = args.vertical
    fmt = args.format
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    db_path = Path("data/papers.db")
    if not db_path.exists():
        logger.warning("Database not found at %s — skipping export", db_path)
        return 0

    logger.info("db export — vertical=%s format=%s output=%s", vertical, fmt, output_dir)

    try:
        import sqlite3
        import csv
        from datetime import datetime, timezone

        conn = sqlite3.connect(str(db_path))
        conn.row_factory = sqlite3.Row

        tables = [row[0] for row in conn.execute(
            "SELECT name FROM sqlite_master WHERE type='table'"
        ).fetchall()]

        date_tag = datetime.now(timezone.utc).strftime("%Y-%m-%d")

        for table in tables:
            try:
                rows = conn.execute(
                    f"SELECT * FROM {table} WHERE vertical = ?",  # noqa: S608
                    (vertical,),
                ).fetchall()
            except sqlite3.OperationalError:
                # Table has no 'vertical' column — export everything
                rows = conn.execute(f"SELECT * FROM {table}").fetchall()  # noqa: S608

            if not rows:
                continue

            if fmt == "csv":
                out_file = output_dir / f"daily_{table}_{vertical}_{date_tag}.csv"
                with out_file.open("w", newline="", encoding="utf-8") as fh:
                    writer = csv.DictWriter(fh, fieldnames=rows[0].keys())
                    writer.writeheader()
                    writer.writerows([dict(r) for r in rows])
                logger.info("Exported %d rows -> %s", len(rows), out_file)

        conn.close()

    except Exception as exc:
        logger.error("db export failed: %s", exc, exc_info=True)
        return 1

    return 0


def cmd_finops_monitor(args: argparse.Namespace) -> int:
    """Run the FinOps monitor cycle."""
    logger.info("finops monitor — starting")

    try:
        from src.finops.monitor import run_monitor
        run_monitor()
    except ImportError:
        # Fallback: call the module directly if run_monitor doesn't exist
        logger.warning("run_monitor not found in src.finops.monitor — trying legacy path")
        try:
            import importlib
            mod = importlib.import_module("src.finops.monitor")
            if hasattr(mod, "main"):
                mod.main()
            else:
                logger.error("No main() or run_monitor() found in src.finops.monitor")
                return 1
        except Exception as exc:
            logger.error("finops monitor failed: %s", exc, exc_info=True)
            return 1
    except Exception as exc:
        logger.error("finops monitor failed: %s", exc, exc_info=True)
        return 1

    logger.info("finops monitor — completed")
    return 0


# ---------------------------------------------------------------------------
# Argument parser
# ---------------------------------------------------------------------------

def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="python -m src.cli",
        description="Herreira multi-LLM pipeline CLI",
    )
    parser.add_argument(
        "--vertical",
        default="all",
        help="Target vertical (fintech|varejo|saude|tecnologia|all)",
    )

    sub = parser.add_subparsers(dest="command", required=True)

    # collect <module>
    collect_p = sub.add_parser("collect", help="Run a collector module")
    collect_p.add_argument(
        "module",
        choices=["citation", "competitor"],
        help="Collector module to run",
    )

    # db export
    db_p = sub.add_parser("db", help="Database operations")
    db_sub = db_p.add_subparsers(dest="db_command", required=True)
    export_p = db_sub.add_parser("export", help="Export database to files")
    export_p.add_argument("--format", choices=["csv", "json"], default="csv")
    export_p.add_argument("--output", default="data/daily")

    # finops monitor
    finops_p = sub.add_parser("finops", help="FinOps operations")
    finops_sub = finops_p.add_subparsers(dest="finops_command", required=True)
    finops_sub.add_parser("monitor", help="Run FinOps monitor cycle")

    return parser


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command == "collect":
        return cmd_collect(args)

    if args.command == "db":
        if args.db_command == "export":
            return cmd_db_export(args)

    if args.command == "finops":
        if args.finops_command == "monitor":
            return cmd_finops_monitor(args)

    parser.print_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
