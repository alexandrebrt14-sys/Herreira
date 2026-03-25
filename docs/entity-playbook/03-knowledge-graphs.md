# Step 3: Knowledge Graphs

**Time estimate:** 2-6 hours
**Prerequisite:** Completed [Step 2: Schema Markup](02-schema-markup.md)
**Output:** Entity presence established in major knowledge graph systems

---

## Objective

Establish your entity in the knowledge graph systems that LLMs rely on for entity understanding. Knowledge graphs are structured databases of entities and their relationships — they are a primary source of factual information for AI systems.

## Why Knowledge Graphs Matter

When ChatGPT says "Acme Corp is a B2B analytics platform founded in 2019," that information likely comes from a knowledge graph — either directly (Google Knowledge Graph, Wikidata) or indirectly (sources that feed into training data).

Having a well-defined entry in these systems means:
- AI has a structured, authoritative source for your entity facts
- Your entity is connected to related entities (industry, people, products)
- Factual queries about your entity return accurate information

## The Key Knowledge Graph Systems

### 3.1 Google Knowledge Panel

**What it is:** The information box that appears on the right side of Google search results when you search for an entity.

**Why it matters:** Google's Knowledge Graph powers the Knowledge Panel and feeds into Gemini's entity understanding. It is the most widely used knowledge graph for commercial entities.

**How to establish/claim it:**

1. **Search for your entity name** in Google. If a Knowledge Panel appears, click "Claim this knowledge panel" at the bottom.
2. **Verify ownership** through one of Google's verification methods (Google Search Console, official website, YouTube channel, etc.).
3. **Suggest edits** to correct any inaccurate information.

**If no panel exists:**
- Ensure your entity has sufficient "notability signals": a Wikipedia page, Crunchbase profile, press coverage, or significant web presence.
- Strong Schema.org markup on your site helps Google build a panel.
- A Wikidata entry (see below) increases the chance of a panel appearing.

### 3.2 Wikidata

**What it is:** A free, open knowledge base maintained by the Wikimedia Foundation. It is machine-readable and used by many AI systems, including Google, Apple Siri, and others.

**Why it matters:** Wikidata entries are a high-trust source for AI training data. Having an accurate Wikidata entry significantly improves entity understanding across multiple AI systems.

**How to create an entry:**

1. Go to https://www.wikidata.org
2. Create an account
3. Click "Create a new Item"
4. Fill in:
   - **Label:** Your canonical entity name
   - **Description:** Your canonical one-line description
   - **Aliases:** Any alternate names (abbreviations, former names)
5. Add properties (statements):

**For organizations:**
| Property | Wikidata ID | Value |
|---|---|---|
| instance of | P31 | company (Q783794) or appropriate type |
| official website | P856 | https://yourdomain.com |
| inception | P571 | founding date |
| headquarters location | P159 | city |
| industry | P452 | your industry |
| founder | P112 | link to founder's Wikidata item |
| CEO | P169 | link to CEO's Wikidata item |
| official name | P1448 | your legal name |

**For people:**
| Property | Wikidata ID | Value |
|---|---|---|
| instance of | P31 | human (Q5) |
| occupation | P106 | your occupation(s) |
| employer | P108 | link to company Wikidata item |
| educated at | P69 | link to university Wikidata item |
| country of citizenship | P27 | country |
| official website | P856 | your website |

**Important:** Wikidata has notability guidelines. Your entity should have independent, reliable sources documenting it. Do not create entries for entities that lack third-party coverage.

### 3.3 Wikipedia

**What it is:** The largest encyclopedia. Its articles feed into most AI training datasets.

**Why it matters:** A Wikipedia article is one of the strongest entity authority signals. LLMs frequently cite or paraphrase Wikipedia content.

**Reality check:** Wikipedia has strict notability requirements. Most small and medium businesses do not meet them. Do not create a Wikipedia article if your entity does not meet the notability guidelines — it will be deleted, and repeated attempts may result in a topic ban.

**Notability criteria (simplified):**
- Significant coverage in multiple independent, reliable sources
- Sources must be third-party (not press releases, not your own blog)
- Coverage must be non-trivial (more than brief mentions)

**If you meet notability criteria:**
- Do NOT write your own Wikipedia article. This is a conflict of interest.
- You may suggest an article through the "Articles for Creation" process.
- You may request corrections to an existing article through the Talk page.
- Focus on providing sources, not writing content.

**If you don't meet criteria:**
- Focus on Wikidata instead (lower notability threshold).
- Build press coverage and third-party references over time.
- Do not try to game the system.

### 3.4 Crunchbase

**What it is:** A database of companies, particularly tech companies, startups, and their people.

**Why it matters:** Crunchbase is a frequently cited source in AI training data for company information. LLMs often reference Crunchbase data when answering questions about companies.

**How to optimize:**

1. Claim your organization profile at https://www.crunchbase.com
2. Ensure these fields match your canonical entity profile:
   - Company name
   - Short description
   - Long description
   - Founded date
   - Headquarters
   - Company type
   - Industries
   - Number of employees
   - Website
   - Social media links
3. Add key people with accurate titles
4. Keep funding information current (if applicable)

### 3.5 LinkedIn (As Entity Source)

LinkedIn is not traditionally thought of as a knowledge graph, but it functions as one for professional entities. Many AI systems reference LinkedIn data for information about companies and people.

**Company page optimization:**
- Company name: canonical name
- Tagline: canonical one-line description
- About section: canonical full description
- Industry, size, type, founded date: match canonical profile
- Specialties: list your key areas

**Key people profiles:**
- Headline: consistent title format (e.g., "CEO at Company Name")
- About section: consistent with canonical bio
- Experience: accurate current role with company name matching exactly

## Cross-Linking Between Knowledge Graphs

The power of knowledge graphs comes from connections. After establishing presence in each system:

1. **Schema.org `sameAs` on your website** should link to Wikidata, Crunchbase, LinkedIn, and all other profiles
2. **Wikidata** should link to your official website, LinkedIn, Crunchbase
3. **Crunchbase** should link to your website, LinkedIn, Twitter
4. **LinkedIn** should link to your website

This cross-linking helps AI systems recognize that all these profiles represent the same entity.

## Verification

After completing this step:

1. Search for your entity in ChatGPT, Gemini, and Perplexity
2. Check if the responses now more accurately reflect your canonical entity profile
3. Note any remaining inaccuracies — these indicate sources that still need updating

## Next Step

Proceed to [Step 4: Cross-Platform Alignment](04-cross-platform-alignment.md) to systematically update all platform profiles.

---

*Part of the [Entity Consistency Playbook](../README.md) by [Alexandre Caramaschi](https://alexandrecaramaschi.com).*
