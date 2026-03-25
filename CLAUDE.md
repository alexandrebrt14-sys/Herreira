# CLAUDE.md — Herreira Joias

## REGRA #0 — IDIOMA
Todo conteúdo em PT-BR com acentuação completa. Exceção: código em inglês, commits em inglês.

## Proprietário
Alexandre Caramaschi — CEO da Brasil GEO, cofundador do Grupo HAV.

## Sobre o repositório
Inteligência estratégica completa para a Herreira Joias: benchmarking, análise SWOT, auditoria UX, plano de personal branding para Patrícia Caramaschi, e livro autobiográfico.

## Estrutura

```
herreira.html          # Página estratégica completa (benchmarking, SWOT, UX, branding, financeiro)
a-joia-que-sou.html    # Livro de Patrícia Caramaschi (85 páginas, design Gucci)
a-joia-que-sou.txt     # Versão texto simples do livro (18K palavras)
llms.txt               # Ficha da Herreira para LLMs (spec llms.txt)

src/                   # Módulos Python do geo-orchestrator (multi-LLM pipeline)
  config.py            # Configuração de 5 LLMs (providers, custos, routing)
  orchestrator.py      # Orquestrador de tarefas multi-LLM
  router.py            # Roteamento adaptativo por tipo de tarefa
  llm_client.py        # Cliente HTTP unificado (OpenAI, Anthropic, Google, Perplexity, Groq)
  pipeline.py          # Pipeline com waves paralelas e checkpoints
  cost_tracker.py      # Tracking de custos por tarefa/LLM
  finops.py            # Engine de FinOps (limites, alertas, budget)
  circuit_breaker.py   # Circuit breaker por provider
  tracer.py            # Tracing com spans e timeline
  db/                  # Database client SQLite + schema
  finops/              # Monitor FinOps + tracker
  collectors/          # Collectors de citações, competidores, SERP

scripts/               # Scripts de automação
  send-report.py       # Gerador de relatório HTML diário (Resend API)
  sync_to_supabase.py  # Sincroniza SQLite para Supabase

tools/                 # Ferramentas
  validator.py         # Validador de llms.txt

docs/                  # Documentação e referências
  entity-playbook/     # 5-step playbook de consistência de entidade
  llms-txt-templates/  # Templates llms.txt (SaaS, e-commerce, personal brand, etc.)
  llms-txt-spec.md     # Especificação do formato llms.txt
  geo-checklist.md     # Checklist GEO com 60+ itens
  taxonomy.json        # Vocabulário de 60+ termos GEO estruturado
  taxonomy.csv         # Flat export da taxonomia

.github/workflows/     # CI/CD
  daily-collect.yml    # Coleta diária de dados (template do papers)
  weekly-benchmark.yml # Benchmark semanal (template)
```

## Empresa analisada
- Herreira Joias — herreirasemijoias.com.br
- CEO: Patrícia Caramaschi (@patycaramaschi.oficial)
- Grupo HAV: Herreira + Aulore + Vitesse = R$ 21M/ano
- Sede: Goiânia, GO

## Publicado em
- alexandrecaramaschi.com/herreira.html (página estratégica)
- alexandrecaramaschi.com/a-joia-que-sou.html (livro)
