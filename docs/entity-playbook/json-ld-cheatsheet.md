# JSON-LD Cheatsheet

Copy-paste JSON-LD templates for common entity types. Replace placeholder values with your actual data.

**How to use:** Place each JSON-LD block inside a `<script type="application/ld+json">` tag in the `<head>` section of the relevant page.

---

## Organization

**Use on:** Homepage

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://YOURDOMAIN.com/#organization",
  "name": "YOUR ENTITY NAME",
  "alternateName": "ALTERNATE NAME (if any, otherwise remove this line)",
  "url": "https://YOURDOMAIN.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://YOURDOMAIN.com/logo.png",
    "width": 600,
    "height": 60
  },
  "image": "https://YOURDOMAIN.com/og-image.jpg",
  "description": "YOUR CANONICAL ONE-LINE DESCRIPTION.",
  "foundingDate": "YYYY",
  "founder": {
    "@type": "Person",
    "name": "FOUNDER NAME",
    "@id": "https://YOURDOMAIN.com/team/FOUNDER-SLUG/#person"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": NUMBER
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "STREET ADDRESS",
    "addressLocality": "CITY",
    "addressRegion": "STATE",
    "postalCode": "ZIP",
    "addressCountry": "COUNTRY CODE (e.g., BR, US)"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+XX-XX-XXXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "Portuguese"]
  },
  "sameAs": [
    "https://linkedin.com/company/YOURCOMPANY",
    "https://twitter.com/YOURCOMPANY",
    "https://github.com/YOURCOMPANY",
    "https://crunchbase.com/organization/YOURCOMPANY",
    "https://wikidata.org/wiki/QXXXXXXXXX",
    "https://instagram.com/YOURCOMPANY",
    "https://facebook.com/YOURCOMPANY",
    "https://youtube.com/@YOURCOMPANY"
  ],
  "knowsAbout": [
    "TOPIC 1",
    "TOPIC 2",
    "TOPIC 3"
  ]
}
```

---

## Person

**Use on:** Bio page, about page, team page

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://YOURDOMAIN.com/team/PERSON-SLUG/#person",
  "name": "FULL NAME",
  "givenName": "FIRST NAME",
  "familyName": "LAST NAME",
  "jobTitle": "JOB TITLE",
  "description": "CANONICAL BIO (2-3 sentences).",
  "url": "https://YOURDOMAIN.com/team/PERSON-SLUG",
  "image": "https://YOURDOMAIN.com/team/PERSON-SLUG-headshot.jpg",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://YOURDOMAIN.com/#organization",
    "name": "YOUR ENTITY NAME"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "UNIVERSITY NAME"
    }
  ],
  "knowsAbout": [
    "EXPERTISE 1",
    "EXPERTISE 2",
    "EXPERTISE 3"
  ],
  "sameAs": [
    "https://linkedin.com/in/PROFILE",
    "https://twitter.com/HANDLE",
    "https://github.com/HANDLE"
  ]
}
```

---

## WebSite

**Use on:** Every page (via site-wide template)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://YOURDOMAIN.com/#website",
  "name": "YOUR ENTITY NAME",
  "url": "https://YOURDOMAIN.com",
  "publisher": {
    "@type": "Organization",
    "@id": "https://YOURDOMAIN.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://YOURDOMAIN.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## Article

**Use on:** Every blog post, article, or column

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://YOURDOMAIN.com/blog/ARTICLE-SLUG/#article",
  "headline": "ARTICLE TITLE (match the H1)",
  "description": "CONCISE SUMMARY OF THE ARTICLE (1-2 sentences).",
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "author": {
    "@type": "Person",
    "@id": "https://YOURDOMAIN.com/team/AUTHOR-SLUG/#person",
    "name": "AUTHOR NAME"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://YOURDOMAIN.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://YOURDOMAIN.com/blog/ARTICLE-SLUG"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://YOURDOMAIN.com/blog/ARTICLE-SLUG/cover.jpg",
    "width": 1200,
    "height": 630
  },
  "wordCount": NUMBER,
  "keywords": ["KEYWORD1", "KEYWORD2", "KEYWORD3"]
}
```

---

## SoftwareApplication

**Use on:** Product page (for SaaS/software products)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://YOURDOMAIN.com/#software",
  "name": "PRODUCT NAME",
  "description": "CANONICAL PRODUCT DESCRIPTION.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "url": "https://YOURDOMAIN.com",
  "author": {
    "@type": "Organization",
    "@id": "https://YOURDOMAIN.com/#organization"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Free",
      "price": "0",
      "priceCurrency": "USD",
      "description": "WHAT'S INCLUDED IN FREE TIER"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "XX",
      "priceCurrency": "USD",
      "description": "Per user/month. WHAT'S INCLUDED."
    },
    {
      "@type": "Offer",
      "name": "Enterprise",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Custom pricing. WHAT'S INCLUDED."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "X.X",
    "ratingCount": "XXXX",
    "bestRating": "5"
  },
  "featureList": "FEATURE 1, FEATURE 2, FEATURE 3, FEATURE 4"
}
```

---

## Product

**Use on:** Product detail pages (e-commerce)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://YOURDOMAIN.com/products/PRODUCT-SLUG/#product",
  "name": "PRODUCT NAME",
  "description": "PRODUCT DESCRIPTION with key specifications.",
  "brand": {
    "@type": "Brand",
    "name": "BRAND NAME"
  },
  "sku": "YOUR-SKU",
  "gtin13": "BARCODE-NUMBER",
  "image": [
    "https://YOURDOMAIN.com/products/PRODUCT-SLUG/image1.jpg",
    "https://YOURDOMAIN.com/products/PRODUCT-SLUG/image2.jpg"
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://YOURDOMAIN.com/products/PRODUCT-SLUG",
    "priceCurrency": "USD",
    "price": "XX.XX",
    "priceValidUntil": "YYYY-MM-DD",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "@id": "https://YOURDOMAIN.com/#organization"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "X.X",
    "reviewCount": "XXX",
    "bestRating": "5"
  }
}
```

---

## LocalBusiness

**Use on:** Homepage (for businesses with a physical location)

```json
{
  "@context": "https://schema.org",
  "@type": "LOCAL_BUSINESS_SUBTYPE",
  "@id": "https://YOURDOMAIN.com/#business",
  "name": "YOUR BUSINESS NAME",
  "description": "CANONICAL DESCRIPTION.",
  "url": "https://YOURDOMAIN.com",
  "telephone": "+XX-XX-XXXX-XXXX",
  "email": "contact@YOURDOMAIN.com",
  "image": "https://YOURDOMAIN.com/storefront.jpg",
  "logo": "https://YOURDOMAIN.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "STREET ADDRESS",
    "addressLocality": "CITY",
    "addressRegion": "STATE",
    "postalCode": "ZIP",
    "addressCountry": "COUNTRY CODE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXXXX",
    "longitude": "-XX.XXXXXX"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://linkedin.com/company/YOURCOMPANY",
    "https://instagram.com/YOURCOMPANY",
    "https://facebook.com/YOURCOMPANY"
  ]
}
```

Replace `LOCAL_BUSINESS_SUBTYPE` with the appropriate type: `Restaurant`, `Store`, `MedicalBusiness`, `LegalService`, `FinancialService`, `RealEstateAgent`, etc. See the full list at https://schema.org/LocalBusiness.

---

## BreadcrumbList

**Use on:** All interior pages

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://YOURDOMAIN.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "SECTION NAME",
      "item": "https://YOURDOMAIN.com/SECTION"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "PAGE NAME",
      "item": "https://YOURDOMAIN.com/SECTION/PAGE"
    }
  ]
}
```

---

## FAQPage

**Use on:** Pages with genuine question-answer content

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "THE QUESTION AS USERS WOULD ASK IT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "THE COMPLETE ANSWER. Can include basic HTML: <strong>bold</strong>, <a href='https://link.com'>links</a>, <ul><li>lists</li></ul>."
      }
    },
    {
      "@type": "Question",
      "name": "SECOND QUESTION?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SECOND ANSWER."
      }
    }
  ]
}
```

---

## Implementation Notes

**Multiple schemas on one page:** You can have multiple JSON-LD blocks on a single page. For example, a blog post page might have `Article`, `BreadcrumbList`, and `WebSite` schemas — each in its own `<script>` tag.

**Testing:** Always validate after implementation:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org

**Common JSON-LD errors:**
- Trailing commas after the last item in an array or object
- Missing quotes around property values
- Using relative URLs instead of absolute URLs
- Mismatched `@id` references (typos in the URI)

---

*Cheatsheet from the [Entity Consistency Playbook](../README.md) by [Alexandre Caramaschi](https://alexandrecaramaschi.com).*
