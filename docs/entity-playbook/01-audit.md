# Step 1: Entity Audit

**Time estimate:** 2-4 hours
**Prerequisite:** None
**Output:** A complete inventory of all existing entity representations across the internet

---

## Objective

Before you can fix entity inconsistencies, you need to find them. This step systematically discovers every place your entity appears online and documents what each source says about you.

## Process

### 1.1 Define Your Entity

Start by writing down the basic facts you want to be consistent:

| Attribute | Your Canonical Value |
|---|---|
| Entity name | |
| Entity type | (Company / Person / Product / Service) |
| One-line description | |
| Full description (2-3 sentences) | |
| Founded/established date | |
| Location (HQ) | |
| Industry/category | |
| Key people (names + titles) | |
| Website URL | |
| Key products/services | |

This becomes your **canonical entity profile** — the single source of truth that all other representations should match.

### 1.2 Audit Your Own Properties

Check every digital property you control:

**Website:**
- Homepage: How is your entity described in the hero section, about section, footer?
- About page: Does the description match your canonical profile?
- Team page: Are names and titles consistent with LinkedIn and other profiles?
- Schema markup: What does your JSON-LD say? (View page source, search for `application/ld+json`)
- Meta description: What does Google see?
- llms.txt: Does it exist? Is it accurate?

**Social media profiles:**
- LinkedIn (company page + personal profiles of key people)
- Twitter/X
- Instagram
- Facebook
- YouTube
- TikTok

For each, record: name used, bio/description, profile photo, links.

### 1.3 Audit Third-Party Platforms

These are platforms you may have profiles on but don't fully control:

**Business directories:**
- Google Business Profile
- Crunchbase
- Glassdoor
- Reclame Aqui (Brazil)
- Better Business Bureau (US)
- Industry-specific directories

**Review platforms:**
- G2, Capterra, TrustRadius (for software)
- Yelp, TripAdvisor (for local businesses)
- App Store, Google Play (for mobile apps)

**Knowledge bases:**
- Wikipedia (search for your entity)
- Wikidata (search at wikidata.org)
- Google Knowledge Panel (search your entity name in Google, look for the panel on the right)

**Content platforms:**
- Medium, Substack (author profiles)
- GitHub (organization or personal profile)
- SlideShare, Speaker Deck
- Podcast directories (Apple Podcasts, Spotify)

### 1.4 Audit Uncontrolled Mentions

These are mentions you don't control but that shape your entity:

- **Press articles:** Search Google News for your entity name. Note how journalists describe you.
- **Blog mentions:** Search for your entity name in quotes. Note descriptions used.
- **Forum mentions:** Check Reddit, Stack Overflow, Quora, industry forums.
- **AI responses:** Query ChatGPT, Gemini, Perplexity, and Copilot with:
  - "What is [entity name]?"
  - "Who is [person name]?"
  - "Tell me about [entity name]"

### 1.5 Document Everything

Use the [Entity Audit Template](../templates/entity-audit-template.md) to record your findings. For each platform, document:

1. Platform name
2. URL
3. Entity name as it appears
4. Description as it appears
5. Key attributes (founding date, location, etc.)
6. Whether you can edit it
7. Discrepancy notes (what differs from canonical)

### 1.6 Identify Discrepancies

Review your audit and categorize discrepancies:

**Critical (fix immediately):**
- Wrong entity name (misspelled, outdated company name)
- Factually incorrect information (wrong founding date, wrong location)
- Outdated descriptions (still references old products, former leadership)

**Important (fix this week):**
- Inconsistent naming (Acme vs Acme Corp vs Acme Corporation)
- Different descriptions across platforms
- Missing `sameAs` links between profiles

**Moderate (fix this month):**
- Inconsistent profile photos/logos
- Incomplete profiles on secondary platforms
- Missing profiles on relevant platforms

## Expected Output

After completing this step, you should have:

1. A canonical entity profile document
2. A spreadsheet of all entity representations (use the template)
3. A prioritized list of discrepancies to fix

## Next Step

Proceed to [Step 2: Schema Markup](02-schema-markup.md) to implement your canonical entity profile as structured data on your website.

---

*Part of the [Entity Consistency Playbook](../README.md) by [Alexandre Caramaschi](https://alexandrecaramaschi.com).*
