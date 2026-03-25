# Step 2: Schema Markup

**Time estimate:** 4-8 hours
**Prerequisite:** Completed [Step 1: Audit](01-audit.md) with canonical entity profile
**Output:** JSON-LD structured data implemented on your website

---

## Objective

Implement Schema.org structured data on your website that defines your entity in a machine-readable format. This is the most important technical step in entity consistency — it is the authoritative, structured representation of your entity that search engines and AI systems read directly.

## Why Schema Markup Matters for Entity Consistency

Schema markup is not just for rich snippets in Google. It serves three critical functions for AI visibility:

1. **Entity definition:** It tells machines what your entity is, unambiguously.
2. **Entity linking:** The `sameAs` property connects your entity across platforms, helping AI systems recognize that your website, LinkedIn, and Crunchbase all refer to the same entity.
3. **Attribute authority:** When there are conflicting facts across sources, structured data on your own domain carries significant weight.

## Implementation Guide

### 2.1 Choose Your Primary Entity Type

Based on your entity:

| Entity | Primary Schema Type | Where to Place |
|---|---|---|
| Company | `Organization` or `Corporation` | Homepage |
| Local business | `LocalBusiness` (or subtype) | Homepage |
| Person | `Person` | About/bio page |
| Software product | `SoftwareApplication` | Product page |
| Physical product | `Product` | Product page |

### 2.2 Implement Organization Schema

Place this in the `<head>` of your homepage inside a `<script type="application/ld+json">` tag.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://yourdomain.com/#organization",
  "name": "Your Canonical Entity Name",
  "alternateName": "Any Known Alternate Name",
  "url": "https://yourdomain.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yourdomain.com/logo.png",
    "width": 600,
    "height": 60
  },
  "description": "Your canonical one-line description, identical to what you defined in the audit.",
  "foundingDate": "2019",
  "founder": {
    "@type": "Person",
    "name": "Founder Name",
    "@id": "https://yourdomain.com/team/founder-name/#person"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 85
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sao Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://linkedin.com/company/yourcompany",
    "https://twitter.com/yourcompany",
    "https://github.com/yourcompany",
    "https://crunchbase.com/organization/yourcompany",
    "https://wikidata.org/wiki/QXXXXXXX"
  ],
  "knowsAbout": [
    "Your primary topic",
    "Your secondary topic",
    "Your tertiary topic"
  ]
}
```

**Critical fields to get right:**
- `name`: Must match your canonical entity name exactly
- `description`: Must match your canonical description
- `sameAs`: Must include all authoritative profile URLs
- `@id`: Creates a persistent identifier for your entity within your site

### 2.3 Implement Person Schema

For key individuals (founders, experts, authors), place on their bio page:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://yourdomain.com/team/person-name/#person",
  "name": "Person Full Name",
  "jobTitle": "Chief Executive Officer",
  "description": "Person's canonical bio, matching LinkedIn and other profiles.",
  "url": "https://yourdomain.com/team/person-name",
  "image": "https://yourdomain.com/team/person-name-headshot.jpg",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://yourdomain.com/#organization",
    "name": "Your Canonical Entity Name"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "University Name"
    }
  ],
  "knowsAbout": [
    "Specific expertise area 1",
    "Specific expertise area 2",
    "Specific expertise area 3"
  ],
  "sameAs": [
    "https://linkedin.com/in/personprofile",
    "https://twitter.com/personhandle",
    "https://github.com/personhandle"
  ]
}
```

### 2.4 Implement WebSite Schema

Place on every page (usually via site-wide template):

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Canonical Entity Name",
  "url": "https://yourdomain.com",
  "publisher": {
    "@type": "Organization",
    "@id": "https://yourdomain.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yourdomain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 2.5 Implement Article Schema

On every blog post or article:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "description": "Concise description of the article content.",
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-18",
  "author": {
    "@type": "Person",
    "@id": "https://yourdomain.com/team/author-name/#person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://yourdomain.com/#organization"
  },
  "mainEntityOfPage": "https://yourdomain.com/blog/article-slug",
  "image": "https://yourdomain.com/blog/article-slug/cover.jpg"
}
```

**Key detail:** The `author` field uses `@id` to reference the same Person entity defined on the bio page. This creates an entity graph, not just isolated markup.

### 2.6 Implement BreadcrumbList Schema

On all interior pages:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yourdomain.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://yourdomain.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Article Title",
      "item": "https://yourdomain.com/blog/article-slug"
    }
  ]
}
```

## Validation

After implementation, validate every page:

1. **Google Rich Results Test:** https://search.google.com/test/rich-results — paste your URL, check for errors
2. **Schema.org Validator:** https://validator.schema.org — paste your JSON-LD, check for warnings
3. **Manual inspection:** View page source, search for `application/ld+json`, verify the content matches your canonical entity profile

## Common Mistakes

| Mistake | Why It's a Problem | Fix |
|---|---|---|
| `sameAs` links are missing or incomplete | AI can't connect your entity across platforms | Add all authoritative profile URLs |
| Name in schema differs from visible page content | Signals inconsistency to crawlers | Make schema `name` match the displayed name |
| No `@id` on entities | Entities can't be cross-referenced across pages | Add `@id` with a consistent URI pattern |
| Author schema not linked to Person entity | Author credibility isn't connected to person entity | Use `@id` to reference the Person |
| Schema is generated but never validated | Silent errors go undetected | Validate after every change |

## Next Step

Proceed to [Step 3: Knowledge Graphs](03-knowledge-graphs.md) to establish your entity in external knowledge graph systems.

---

*Part of the [Entity Consistency Playbook](../README.md) by [Alexandre Caramaschi](https://alexandrecaramaschi.com).*
