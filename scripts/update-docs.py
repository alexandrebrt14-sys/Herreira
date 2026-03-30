"""Update docs/ with fresh data from the SQLite database.

Reads data/papers.db (if it exists) and regenerates lightweight
summary files under docs/stats/ so the repository always has
an up-to-date snapshot after each daily collection run.
"""

from __future__ import annotations

import json
import logging
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s — %(message)s",
    datefmt="%Y-%m-%dT%H:%M:%S",
)
logger = logging.getLogger("update-docs")

ROOT = Path(__file__).resolve().parent.parent
DB_PATH = ROOT / "data" / "papers.db"
DOCS_STATS_DIR = ROOT / "docs" / "stats"


def load_summary_from_db() -> dict:
    """Query key metrics from the SQLite database."""
    if not DB_PATH.exists():
        logger.warning("Database not found at %s — skipping stats generation", DB_PATH)
        return {}

    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row

    summary: dict = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "db_path": str(DB_PATH),
        "tables": {},
    }

    try:
        tables = [
            row[0]
            for row in conn.execute(
                "SELECT name FROM sqlite_master WHERE type='table'"
            ).fetchall()
        ]

        for table in tables:
            try:
                row_count = conn.execute(
                    f"SELECT COUNT(*) FROM {table}"  # noqa: S608
                ).fetchone()[0]
                summary["tables"][table] = {"row_count": row_count}
                logger.info("Table %s: %d rows", table, row_count)
            except sqlite3.OperationalError as exc:
                logger.warning("Could not query table %s: %s", table, exc)

    finally:
        conn.close()

    return summary


def write_stats(summary: dict) -> None:
    """Write summary JSON to docs/stats/latest.json."""
    DOCS_STATS_DIR.mkdir(parents=True, exist_ok=True)

    out_file = DOCS_STATS_DIR / "latest.json"
    out_file.write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding="utf-8")
    logger.info("Stats written to %s", out_file)

    # Also write a dated snapshot
    date_tag = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    dated_file = DOCS_STATS_DIR / f"{date_tag}.json"
    dated_file.write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding="utf-8")
    logger.info("Dated snapshot written to %s", dated_file)


def main() -> None:
    logger.info("update-docs starting")
    summary = load_summary_from_db()

    if summary:
        write_stats(summary)
    else:
        logger.info("No data available — writing empty stats marker")
        DOCS_STATS_DIR.mkdir(parents=True, exist_ok=True)
        marker = DOCS_STATS_DIR / "latest.json"
        marker.write_text(
            json.dumps(
                {
                    "generated_at": datetime.now(timezone.utc).isoformat(),
                    "note": "No database available at collection time",
                },
                indent=2,
            ),
            encoding="utf-8",
        )

    logger.info("update-docs completed")


if __name__ == "__main__":
    main()
