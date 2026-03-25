# Step 5: Monitoring

**Time estimate:** 1 hour per month (ongoing)
**Prerequisite:** Completed [Step 4: Cross-Platform Alignment](04-cross-platform-alignment.md)
**Output:** Monthly entity consistency report with trend tracking

---

## Objective

Entity consistency is not a one-time project. AI models are retrained, platforms change, new mentions appear, and previously correct information can drift. This step establishes a monthly monitoring process to catch and correct drift.

## Monthly Monitoring Process

### 5.1 AI Response Monitoring (30 minutes/month)

Define 5-10 queries that test how AI systems describe your entity. Run them monthly across major platforms.

**Query types to include:**

| Query Type | Example | What You're Testing |
|---|---|---|
| Identity | "What is [entity name]?" | Basic entity recognition and description |
| Person | "Who is [person name]?" | Person entity accuracy |
| Comparison | "Best [category] tools" | Whether you're mentioned and how |
| Specific fact | "[entity name] pricing" | Factual accuracy |
| Recommendation | "Recommend a [your category] for [use case]" | Whether you're recommended |

**Platforms to check:**
- ChatGPT (latest model)
- Google Gemini
- Perplexity
- Microsoft Copilot

**What to record for each query:**

1. Date
2. Platform and model version (if visible)
3. Your query (exact text)
4. Full AI response
5. Was your entity mentioned? (Yes/No)
6. Was the description accurate? (Accurate / Partially accurate / Inaccurate / Not mentioned)
7. What sources were cited? (if visible, e.g., in Perplexity)
8. Specific inaccuracies noted

### 5.2 Platform Profile Check (15 minutes/month)

Quick scan of your profiles on key platforms. Check for:

- **Unauthorized changes:** Did someone edit your Google Business Profile? Did a review platform update your description?
- **New reviews or mentions:** Check G2, Capterra, Reclame Aqui for new reviews that may contain entity misinformation
- **Knowledge Panel changes:** Search Google for your entity — has the Knowledge Panel changed?
- **Schema validation:** Run your homepage through Google Rich Results Test — any new errors?

### 5.3 New Mention Discovery (15 minutes/month)

Search for new mentions of your entity:

1. Google Alerts: Set up alerts for your entity name, key people names, and product names (if not already active)
2. Google search (past month): Search `"entity name"` filtered to the last month
3. Social listening: Check mentions on Twitter/X, LinkedIn, Reddit

For each new mention, check: does it use your canonical name and description? If not, can you request a correction?

## Tracking Template

Use a simple spreadsheet with these tabs:

**Tab 1: AI Response Log**

| Date | Platform | Query | Mentioned? | Accurate? | Notes |
|---|---|---|---|---|---|
| 2026-03-20 | ChatGPT | "What is Acme Corp?" | Yes | Partially | Wrong founding year (said 2018, correct is 2019) |
| 2026-03-20 | Perplexity | "What is Acme Corp?" | Yes | Yes | Cited website and Crunchbase |

**Tab 2: Consistency Score**

Track a simple consistency score over time:

| Month | AI Mention Rate | AI Accuracy Rate | Platforms Aligned | New Issues Found |
|---|---|---|---|---|
| March 2026 | 7/10 queries | 85% accurate | 18/20 | 2 |
| April 2026 | 8/10 queries | 90% accurate | 19/20 | 1 |

**Tab 3: Issue Log**

| Date Found | Platform | Issue | Severity | Status | Date Resolved |
|---|---|---|---|---|---|
| 2026-03-20 | ChatGPT | Wrong founding year | High | Corrected on Crunchbase, awaiting model update | — |
| 2026-03-20 | G2 | Outdated product description | Medium | Updated | 2026-03-21 |

## When to Re-Run the Full Playbook

Trigger a full playbook re-run (Steps 1-4) when:

- **Major entity change:** Company rebrand, name change, merger, new flagship product
- **Leadership change:** New CEO, founder departure
- **Significant pivot:** New market, new positioning, major product change
- **AI inaccuracy pattern:** The same error appears across multiple AI platforms, indicating a deep source issue
- **Annually:** Even without triggers, do a full audit once a year

## Automation Opportunities

As your monitoring matures, consider automating:

- **Google Alerts** for entity name and key people (free, set up once)
- **Schema validation** via scheduled runs of Google Rich Results API or Schema.org validator
- **AI query monitoring** via API calls to OpenAI, Google, and Perplexity APIs (requires development effort)
- **Social listening** via tools like Mention, Brand24, or Brandwatch

## Metrics to Report

If you report to leadership or clients, these are the key metrics:

1. **AI Mention Rate:** Percentage of relevant queries where your entity is mentioned (target: 70%+)
2. **AI Accuracy Rate:** Percentage of mentions where entity facts are correct (target: 90%+)
3. **Platform Alignment Score:** Number of platforms with fully consistent profiles / total platforms (target: 95%+)
4. **Citation Sources:** Which sources AI systems cite when mentioning your entity (indicates which platforms are most influential)

---

*Part of the [Entity Consistency Playbook](../README.md) by [Alexandre Caramaschi](https://alexandrecaramaschi.com).*
