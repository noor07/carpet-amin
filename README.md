# SUNDUS

Collectible hand-knotted rugs — designed in Florida, USA, handcrafted in Bhadohi, India.

This is the marketing site for House of Sundus LLC, live at **[houseofsundus.com](https://houseofsundus.com)**.

> ⚠️ This project pins a Next.js version with real breaking changes from what most training data assumes. Read [`AGENTS.md`](./AGENTS.md) — and the docs under `node_modules/next/dist/docs/` — before making framework-level changes (routing, config, data fetching, metadata files).

## Stack

- **Next.js 16** (App Router), statically exported (`output: "export"`)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- Fonts: Playfair Display (serif) + Jost (sans), loaded via `next/font/google`

There is no backend — the entire site is pre-rendered at build time and served as static files.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a static site to `out/`.

## Project structure

- `app/` — routes (App Router). Pages are server components by default; interactive pieces (`Header`, `ProductGallery`, `RugPlacementStudio`, the newsletter/inquiry forms) are client components.
- `lib/rugs.ts` — the product catalog (collections + individual rugs). The site's de facto CMS.
- `lib/journal.ts` — journal/blog article content.
- `lib/testimonials.ts` — client/designer testimonials; `components/Testimonials.tsx` renders nothing until this file has real entries. Never seed it with fabricated quotes.
- `lib/roomPlanner.ts` — the room/rug-fit placement logic behind the Rug Placement Studio.
- `lib/basePath.ts` / `lib/siteUrl.ts` — helpers that build correct asset and page URLs across local dev, the GitHub Pages project-page URL, and the custom domain.
- `components/` — shared UI (Header, Footer, Hero, RugCard, ProductGallery, InquiryForm, etc.)

## Pages

Home · `/about` · `/collections` + `/collections/[slug]` · `/trade` · `/wholesale` · `/projects` ("In The Room") · `/rug-placement-studio` · `/journal` + `/journal/[slug]` · `/faq` · `/care` · `/press` · `/policies` · `/contact`

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds the static export and publishes it to GitHub Pages. The custom domain (`houseofsundus.com`) is configured directly in the GitHub repository's Pages settings, with matching DNS records at the domain registrar.

### Build-time environment variables

| Variable | Purpose | Set where |
|---|---|---|
| `GITHUB_PAGES` | `"true"` during the Pages build; enables basePath/asset-prefix handling | GitHub Actions workflow |
| `CUSTOM_DOMAIN` | `houseofsundus.com` — drops the GitHub Pages `/carpet-amin` subpath so the build serves correctly from the domain root | GitHub Actions workflow |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID; analytics only loads when this is set | GitHub repo secret (currently unset — analytics is inert) |
| `NEXT_PUBLIC_SITE_URL` | Overrides the computed absolute site URL (used in the sitemap and Open Graph tags) | not normally needed |

## SEO

`app/robots.ts` and `app/sitemap.ts` generate `robots.txt` and `sitemap.xml` from the live route and content list at build time. `Organization`, `Product`, `BreadcrumbList`, and `FAQPage` JSON-LD are included on the relevant pages.

## Forms

Contact, Trade, Wholesale, and the newsletter signup (`components/InquiryForm.tsx`, `components/NewsletterSignup.tsx`) currently submit via a `mailto:` fallback rather than a server-side handler, since the site has no backend. Swapping in a real form service (e.g. Formspree) is a drop-in replacement for that fallback.
