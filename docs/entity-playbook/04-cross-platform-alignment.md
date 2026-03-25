# Step 4: Cross-Platform Alignment

**Time estimate:** 4-8 hours
**Prerequisite:** Completed [Step 3: Knowledge Graphs](03-knowledge-graphs.md)
**Output:** All controllable platform profiles updated to match canonical entity profile

---

## Objective

Systematically update every platform profile you control so that it matches your canonical entity profile. This is the execution step — taking the discrepancies you found in the audit and fixing them one by one.

## The Alignment Process

### 4.1 Prepare Your Canonical Assets

Before you start updating profiles, prepare these assets so you can copy-paste consistently:

**Text assets:**

| Asset | Length | Use Case |
|---|---|---|
| Entity name | exact | All platforms — name field |
| One-liner | ~15 words | Twitter bio, Instagram bio, short descriptions |
| Short description | 2-3 sentences | LinkedIn about, Crunchbase short description, author bios |
| Full description | 1-2 paragraphs | Website about page, LinkedIn full description, press kit |
| Boilerplate | 1 paragraph | Press releases, guest post bios |

**Visual assets:**

| Asset | Specs | Use Case |
|---|---|---|
| Logo (square) | 500x500px, PNG with transparent background | Profile pictures on social media, directories |
| Logo (horizontal) | 1200x300px, PNG | Website header, email signature |
| Headshot (for people) | 800x800px, JPEG | All profile photos — use the same photo everywhere |
| Cover/banner | 1584x396px (LinkedIn), 1500x500px (Twitter) | Social media covers |

**The key rule: use the same photo everywhere.** Different photos across platforms make it harder for AI systems (and humans) to visually connect your entity.

### 4.2 Platform-by-Platform Update Sequence

Update platforms in this order, from highest authority to lowest:

**Tier 1 — Your domain (highest authority):**

1. **Website homepage:** Update hero text, about section, footer to match canonical description
2. **Website about page:** Full canonical description, team bios, company facts
3. **Schema markup:** Should already be done in Step 2 — verify it still matches
4. **llms.txt:** Update to match canonical profile
5. **Meta descriptions:** Homepage and key pages should use canonical description language

**Tier 2 — Major platforms:**

6. **Google Business Profile:** Name, description, categories, photos, hours, contact info
7. **LinkedIn company page:** Name, tagline, about, industry, size, specialties, logo
8. **LinkedIn personal profiles** (key people): Headline, about, current position with exact company name
9. **Crunchbase:** Short description, long description, all fields (should be done in Step 3)
10. **Twitter/X:** Name, bio (one-liner), website link, profile photo, banner

**Tier 3 — Secondary platforms:**

11. **Instagram:** Name, bio, profile photo, link
12. **Facebook page:** Name, about, description, category
13. **YouTube:** Channel name, about, links
14. **GitHub:** Organization name, bio, website, profile photo
15. **Medium/Substack:** Author name, bio, profile photo

**Tier 4 — Directories and review platforms:**

16. **G2/Capterra/TrustRadius:** Product name, description, category (if applicable)
17. **Industry directories:** Update name and description in each
18. **App stores:** App name, description (if applicable)

**Tier 5 — Uncontrolled platforms (limited action):**

19. **Wikipedia:** Request corrections through Talk page (do not edit directly if you have a conflict of interest)
20. **Wikidata:** Update statements (should be done in Step 3)
21. **Press mentions:** Update your press kit with canonical boilerplate; for future mentions, provide it proactively

### 4.3 Handling Uncontrollable Mentions

Some entity mentions are out of your control — press articles, blog posts, forum discussions. You cannot edit these, but you can:

1. **Update your press kit** with canonical name, description, and boilerplate. Include a "How to refer to us" section. Distribute it to journalists and partners.

2. **Respond to review platforms** using your canonical name and description consistently. Every response is another data point.

3. **Contact publications** with factual correction requests for clearly inaccurate information (wrong founding date, wrong company name).

4. **Create more content** on platforms you control. The volume of consistent, canonical mentions across your own properties will outweigh scattered inconsistencies in third-party mentions.

### 4.4 Multi-Entity Alignment

If you manage multiple related entities (company + product + personal brand), ensure the relationships are consistent:

**Example structure:**
- Company: "Acme Corp" — a B2B analytics platform company
- Product: "Acme Analytics" — by Acme Corp
- Person: "Jane Smith" — CEO at Acme Corp

**Every reference must be bidirectional:**
- Company page mentions "Acme Analytics" as its product
- Product page says "by Acme Corp"
- Jane Smith's LinkedIn says "CEO at Acme Corp"
- Acme Corp's LinkedIn lists Jane Smith as CEO
- Schema markup on all pages cross-references with `@id`

### 4.5 Language Consistency

If you operate in multiple languages:

- Choose a canonical language for your entity name (usually English for global entities, or your primary market language)
- Do NOT translate your entity name unless you have an established translated name
- Descriptions can be translated, but facts must remain identical
- Keep the same visual identity across all language versions

## Quality Check

After updating all platforms, do a final verification:

1. **Name check:** Search your entity name in quotes on Google. Do all results show the same name?
2. **Description check:** Read the first 10 Google results about your entity. Do they describe you consistently?
3. **AI check:** Ask ChatGPT, Gemini, and Perplexity "What is [entity name]?" — does the answer match your canonical profile?
4. **Visual check:** Search Google Images for your entity. Does the same logo/headshot appear consistently?

## Next Step

Proceed to [Step 5: Monitoring](05-monitoring.md) to establish ongoing monitoring of your entity consistency.

---

*Part of the [Entity Consistency Playbook](../README.md) by [Alexandre Caramaschi](https://alexandrecaramaschi.com).*
