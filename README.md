# Herreira Joias — Inteligencia Estrategica

Repositorio de inteligencia estrategica completa para a **Herreira Joias**, marca brasileira de semijoias finas fundada por **Patricia Caramaschi** em 2008 em Goiania, GO. Grupo HAV (Herreira + Aulore + Vitesse): R$ 21M/ano.

## Conteudo Principal

| Arquivo | Descricao |
|---------|-----------|
| `herreira.html` | Pagina estrategica: benchmarking (10 concorrentes), SWOT, auditoria UX (19 issues), personal branding (5 frentes), plano financeiro |
| `a-joia-que-sou.html` | Livro de Patricia Caramaschi — 85 paginas, 16 capitulos + epilogo, design editorial Gucci |
| `a-joia-que-sou.txt` | Versao texto simples do livro (18.053 palavras) |
| `llms.txt` | Ficha estruturada da Herreira para LLMs |

## Infraestrutura Tecnica

Modulos reutilizaveis importados do ecossistema Brasil GEO:

### Pipeline Multi-LLM (`src/`)

| Modulo | Funcao |
|--------|--------|
| `orchestrator.py` | Decomposicao de tarefas e orquestracao multi-LLM |
| `router.py` | Roteamento adaptativo (success*0.6 + cost*0.2 + latency*0.2) |
| `llm_client.py` | Cliente HTTP unificado (OpenAI, Anthropic, Google, Perplexity, Groq) |
| `pipeline.py` | Waves paralelas com checkpoints e quality gates |
| `config.py` | Configuracao de providers, custos e limites |
| `finops.py` | Engine de budget enforcement e alertas |
| `cost_tracker.py` | Acumulador de custos por tarefa/LLM |
| `circuit_breaker.py` | Protecao contra providers fora do ar |
| `tracer.py` | Tracing com spans e timeline |

### Collectors (`src/collectors/`)

- `citation_tracker.py` — Rastreia citacoes em LLMs
- `competitor.py` — Benchmarking de concorrentes
- `base.py` — Classe base abstrata

### Database + FinOps (`src/db/`, `src/finops/`)

- SQLite client com schema versionado
- Monitor automatico: rollup, budget check, anomalias, alertas

### Scripts e Tools

- `scripts/send-report.py` — Relatorio HTML diario via Resend API
- `scripts/sync_to_supabase.py` — Sincroniza para dashboard Supabase
- `tools/validator.py` — Validador de arquivos llms.txt

## Documentacao (`docs/`)

- **Entity Consistency Playbook** — 5 etapas para consistencia de entidade em IAs
- **GEO Checklist** — 60+ itens de otimizacao para motores generativos
- **GEO Taxonomy** — Vocabulario estruturado (JSON + CSV)
- **llms.txt Templates** — Templates para SaaS, e-commerce, personal brand
- **llms.txt Spec** — Especificacao completa do formato

## CI/CD (`.github/workflows/`)

- `daily-collect.yml` — Coleta diaria com jobs paralelos
- `weekly-benchmark.yml` — Benchmark semanal agregado

## Links

- [alexandrecaramaschi.com/herreira.html](https://alexandrecaramaschi.com/herreira.html)
- [alexandrecaramaschi.com/a-joia-que-sou.html](https://alexandrecaramaschi.com/a-joia-que-sou.html)

---

**Brasil GEO** — Alexandre Caramaschi | Pipeline: Claude Opus 4.6 + Chrome MCP | Marco 2026
