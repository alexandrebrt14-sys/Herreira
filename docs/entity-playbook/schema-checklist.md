# Schema Markup Implementation Checklist

A step-by-step checklist for implementing Schema.org structured data across your website. Check off each item as you complete it.

---

## Prerequisites

- [ ] Canonical entity profile is defined (from Step 1: Audit)
- [ ] Access to website source code or CMS
- [ ] Google Rich Results Test bookmarked: https://search.google.com/test/rich-results
- [ ] Schema.org reference open: https://schema.org/docs/full.html

## Homepage

- [ ] `Organization` (or `LocalBusiness`, `Corporation`) JSON-LD is in `<head>`
- [ ] `@id` is set (e.g., `https://yourdomain.com/#organization`)
- [ ] `name` matches canonical entity name exactly
- [ ] `description` matches canonical one-line description
- [ ] `url` is set to homepage URL
- [ ] `logo` is set with `ImageObject` including `url`, `width`, `height`
- [ ] `foundingDate` is set
- [ ] `sameAs` array includes all authoritative profile URLs:
  - [ ] LinkedIn
  - [ ] Twitter/X
  - [ ] GitHub (if applicable)
  - [ ] Crunchbase (if applicable)
  - [ ] Wikidata (if entry exists)
  - [ ] YouTube (if applicable)
  - [ ] Instagram (if applicable)
  - [ ] Facebook (if applicable)
- [ ] `contactPoint` is set with phone/email and contact type
- [ ] `address` is set (if applicable)
- [ ] `knowsAbout` lists key expertise areas
- [ ] `WebSite` schema with `SearchAction` is present
- [ ] Validated with Google Rich Results Test — zero errors

## About / Team Page

- [ ] `Person` schema for each key individual
- [ ] Each `Person` has `@id` (e.g., `https://yourdomain.com/team/name/#person`)
- [ ] `name` matches the person's canonical name
- [ ] `jobTitle` matches their canonical title
- [ ] `worksFor` references the `Organization` `@id`
- [ ] `description` matches their canonical bio
- [ ] `image` is set to their official headshot
- [ ] `sameAs` includes their personal profiles (LinkedIn, Twitter, GitHub)
- [ ] `knowsAbout` lists their specific expertise areas
- [ ] `alumniOf` lists educational institutions
- [ ] Validated — zero errors

## Blog / Article Pages

- [ ] `Article` schema is on every blog post
- [ ] `headline` matches the page H1
- [ ] `description` is a concise summary of the article
- [ ] `datePublished` is set in ISO 8601 format (YYYY-MM-DD)
- [ ] `dateModified` is set and updated when content changes
- [ ] `author` references a `Person` entity with `@id` (not just a name string)
- [ ] `publisher` references the `Organization` `@id`
- [ ] `mainEntityOfPage` is set to the article URL
- [ ] `image` is set to the article's featured image
- [ ] Validated — zero errors

## Product / Service Pages

- [ ] `Product` or `Service` or `SoftwareApplication` schema is present
- [ ] `name` matches the canonical product/service name
- [ ] `description` is accurate and complete
- [ ] `brand` references the `Organization` entity
- [ ] `offers` include pricing with `priceCurrency` and `price`
- [ ] `aggregateRating` is present (if reviews exist)
- [ ] `review` entries are present (if individual reviews exist)
- [ ] `featureList` is populated (for software products)
- [ ] Validated — zero errors

## All Interior Pages

- [ ] `BreadcrumbList` schema is present
- [ ] Breadcrumb positions are sequential (1, 2, 3...)
- [ ] Each breadcrumb item has `name` and `item` (URL)
- [ ] Breadcrumb hierarchy matches the visible breadcrumb on the page

## FAQ Pages (if applicable)

- [ ] `FAQPage` schema is present
- [ ] Each question-answer pair uses `Question` and `acceptedAnswer`
- [ ] Questions are real questions (not fabricated for SEO)
- [ ] Answers are substantive (not one-word responses)
- [ ] Validated — zero errors

## Site-Wide Checks

- [ ] No schema type is duplicated on a single page (e.g., two `Organization` blocks)
- [ ] All `@id` references resolve to actual schema blocks on the site
- [ ] All URLs in schema are absolute (start with `https://`)
- [ ] Schema content matches visible page content (no hidden/different content)
- [ ] No JSON syntax errors across any page
- [ ] Schema is in the HTML source (not injected by JavaScript after page load — unless using server-side rendering)

## Final Validation

- [ ] Run Google Rich Results Test on: homepage, about page, 3 blog posts, product page
- [ ] Run Schema.org Validator on the same pages
- [ ] Zero errors across all tested pages
- [ ] Zero critical warnings across all tested pages

---

*Template from the [Entity Consistency Playbook](../README.md) by [Alexandre Caramaschi](https://alexandrecaramaschi.com).*
