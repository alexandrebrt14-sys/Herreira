# GEO Checklist — Generative Engine Optimization

> The most comprehensive open checklist for making your brand visible to AI engines.
> Maintained by [Alexandre Caramaschi](https://alexandrecaramaschi.com) — CEO of Brasil GEO, pioneer of GEO in Brazil.

[![Stars](https://img.shields.io/github/stars/alexandrecaramaschi/geo-checklist?style=social)](https://github.com/alexandrecaramaschi/geo-checklist)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## What is GEO?

**Generative Engine Optimization (GEO)** is the practice of optimizing your brand's digital presence so that large language models (LLMs) — such as ChatGPT, Gemini, Claude, and Perplexity — accurately understand, represent, and cite your brand in their responses.

As AI-powered search and AI agents replace traditional search for an increasing share of queries, visibility in generative engines is becoming as critical as Google ranking was in the 2000s.

**GEO ≠ SEO.** SEO optimizes for ranking algorithms. GEO optimizes for model comprehension and citability.

Learn more about the full GEO methodology at [alexandrecaramaschi.com](https://alexandrecaramaschi.com).

---

## The GEO Checklist

### Phase 1: Entity Foundation

- [ ] Implement `Organization` Schema.org JSON-LD on homepage and key pages
- [ ] Implement `Person` Schema.org JSON-LD for all key executives and authors
- [ ] Add `sameAs` array to Schema.org linking to all official platform profiles (LinkedIn, Twitter/X, GitHub, Wikidata, etc.)
- [ ] Create or claim Wikidata entry for your organization (highest LLM trust signal)
- [ ] Ensure NAP (Name, Address, Phone) consistency across all online directories
- [ ] Verify Google Business Profile (trains Google's own LLMs)
- [ ] Add `knowsAbout` property to Person schema with your core expertise areas
- [ ] Add `foundingDate`, `numberOfEmployees`, `areaServed` to Organization schema

### Phase 2: Technical Infrastructure

- [ ] Create `llms.txt` at domain root with curated brand summary (markdown format)
- [ ] Create `llms-full.txt` with extended content for deeper AI context
- [ ] Implement `Article` / `BlogPosting` schema on all content pages
- [ ] Add `author` entity linking to Person schema on all content
- [ ] Implement `FAQPage` schema on FAQ and definition pages
- [ ] Implement `BreadcrumbList` schema for navigation clarity
- [ ] Add `HowTo` schema to process/tutorial content
- [ ] Ensure semantic HTML structure: `<article>`, `<section>`, `<header>`, `<main>`, `<aside>`
- [ ] Use proper heading hierarchy (single `<h1>`, logical `<h2>` / `<h3>` nesting)
- [ ] Add descriptive `alt` text to all images (LLMs process alt text)
- [ ] Implement `robots.txt` allowing AI crawlers (check specific bot names for your use case)
- [ ] Ensure mobile responsiveness and Core Web Vitals (affects RAG source selection)

### Phase 3: Content Citability

- [ ] Write explicit definition content: "What is [your core topic]?" pages
- [ ] Name your proprietary frameworks and methodologies (named concepts are citable)
- [ ] Include specific statistics, dates, and measurable claims in content
- [ ] Publish original research, surveys, or data that can be cited by others
- [ ] Create glossary pages for your domain's key terms
- [ ] Write FAQ content covering the questions your audience asks AI assistants
- [ ] Ensure every article and page has a clear, specific author attribution
- [ ] Add publication dates and last-updated dates to all content
- [ ] Write an "About" page that reads as an editorial bio, not marketing copy
- [ ] Create content that directly answers common AI prompts in your domain

### Phase 4: Cross-Platform Entity Reinforcement

- [ ] Publish articles on Medium with consistent author bio and links
- [ ] Publish technical content on Dev.to with complete profile setup
- [ ] Publish on Hashnode with verified domain and author profile
- [ ] Create GitHub profile README with structured bio and expertise areas
- [ ] Write LinkedIn articles (not just posts) — articles are indexed and crawlable
- [ ] Submit to relevant industry wikis or knowledge bases
- [ ] Pursue guest posts or interviews on high-authority publications
- [ ] Get listed in relevant industry directories and databases
- [ ] Ensure podcast appearances have published transcripts with your name
- [ ] Maintain a consistent author bio across ALL platforms (same name, title, company, expertise)

### Phase 5: AI Visibility Auditing

- [ ] Run brand queries on ChatGPT: "[Brand name] — what do they do?"
- [ ] Run brand queries on Perplexity: "Tell me about [Brand name]"
- [ ] Run brand queries on Gemini: "Who is [Person name] and what are they known for?"
- [ ] Run competitive queries: "Best [your service] in [your region]" — do you appear?
- [ ] Run concept queries: "What is [your core framework/concept]?"
- [ ] Document current AI visibility baseline with screenshots
- [ ] Identify gaps between how you want to be described and how AI describes you
- [ ] Track changes monthly after implementing GEO changes
- [ ] Monitor citations: which sources do AI engines cite when mentioning your domain?
- [ ] Test AI agent access to your site with structured prompts

### Phase 6: Business-to-Agent (B2A) Readiness

- [ ] Audit your site's machine-readability (can an AI agent extract key info in one pass?)
- [ ] Ensure pricing, services, and key facts are in structured, easily-parseable formats
- [ ] Create API documentation or machine-readable service catalog if applicable
- [ ] Implement OpenGraph tags for social/agent link previews
- [ ] Add `description` meta tags optimized for factual clarity (not keyword stuffing)
- [ ] Test site accessibility with screen readers (proxy for AI agent parsing)
- [ ] Create a dedicated page explaining what your brand does, for whom, and at what price — optimized for AI extraction
- [ ] Consider Model Context Protocol (MCP) integration if you have an API

---

## GEO vs SEO: Quick Reference

| Dimension | SEO | GEO |
|-----------|-----|-----|
| Optimizes for | Google ranking algorithm | LLM comprehension & citability |
| Key metric | Search ranking position | AI mention frequency & accuracy |
| Primary signals | Backlinks, keywords, technical | Entity consistency, structured data, citability |
| Content goal | Rank for queries | Be cited in responses |
| Link building | Inbound links | Entity references & citations |
| Audit tool | Google Search Console, SEMrush | ChatGPT, Perplexity, Gemini prompts |
| Timeline | 3–12 months | 6–18 months (model retrain cycles) |

---

## Recommended Tools

| Tool | Use Case |
|------|----------|
| [Schema.org](https://schema.org) | Structured data vocabulary reference |
| [Google Rich Results Test](https://search.google.com/test/rich-results) | Validate JSON-LD implementation |
| [Schema Markup Validator](https://validator.schema.org) | Extended schema validation |
| [llms.txt spec](https://llmstxt.org) | llms.txt format reference |
| Perplexity.ai | AI visibility auditing |
| ChatGPT | AI visibility auditing |
| Gemini | AI visibility auditing |
| [Wikidata](https://wikidata.org) | Entity creation and management |

---

## Resources

- Full GEO methodology and consulting: [alexandrecaramaschi.com](https://alexandrecaramaschi.com)
- Brasil GEO — Brazil's first GEO consultancy
- Community: [AI Brasil](https://aibrasil.com.br) — 7,500+ AI professionals

---

## Contributing

Contributions are welcome. If you have a GEO tactic, tool, or resource to add:

1. Fork this repository
2. Add your contribution to the relevant phase
3. Submit a pull request with a brief description of the addition

Please keep contributions practical, platform-agnostic, and actionable.

---

## About the Author

**Alexandre Caramaschi** is the CEO of Brasil GEO — Brazil's first consultancy specialized in Generative Engine Optimization. He is the pioneer of the **Business-to-Agent (B2A)** concept in Brazil, former CMO of Semantix (Nasdaq IPO), co-founder of AI Brasil (7,500+ professionals, 120 companies), mentor at MIT Hub, and columnist at AI Brasil.

With over 20 years in technology, sales, marketing, and digital transformation — and a Computer Science background with AI coursework dating to 2001 — Alexandre has been at the intersection of technology and business throughout every major platform shift.

- Website: [alexandrecaramaschi.com](https://alexandrecaramaschi.com)
- Email: caramaschiai@caramaschiai.io
- WhatsApp: +5562991877534

---

## License

MIT License — free to use, share, and adapt with attribution.

If this checklist helped you, consider:
- Starring this repository
- Sharing it with your network
- Linking back to [alexandrecaramaschi.com](https://alexandrecaramaschi.com)
