# Kairos Business Solutions — landing page

Next.js (App Router) + Tailwind CSS v4 + next-themes. Brand tokens live in `src/app/globals.css`; copy, SEO and structured data in `src/lib/`.

## Run

    npm run dev      # http://localhost:3000
    npm run build && npm start

## Contact form (`/api/contact`)

Sends through the Resend REST API. Set in `.env.local`:

    RESEND_API_KEY=...
    CONTACT_TO_EMAIL=hello@kairosbusinesssolutions.com
    CONTACT_FROM_EMAIL="Kairos Website <website@kairosbusinesssolutions.com>"

Without `RESEND_API_KEY` the form returns a friendly "not configured" message.

## SEO / AI search

Metadata + Open Graph (generated `opengraph-image`), canonical, `sitemap.xml`, `robots.txt` (AI crawlers allowed), `llms.txt`, and JSON-LD (Organization, ProfessionalService, WebSite, WebPage, FAQPage).

## Logos

`scripts/prepare-logos.mjs` trims `assets-src/*` into `public/brand/*` and regenerates the favicon (`node scripts/prepare-logos.mjs`).

## Draft content to review

Services, process steps, FAQ, hero stats and the contact email are placeholders in `src/lib/site.ts` and `src/components/Hero.tsx`.
