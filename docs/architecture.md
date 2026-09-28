# Technical Architecture

## Recommended stack

- Next.js with the App Router and TypeScript for both sites.
- React for components and route composition.
- Tailwind CSS for tokens, responsive layout, and utility composition.
- MDX for articles and case studies.
- Static data modules for navigation, projects, skills, education, social links, and verified repository metadata.
- Vercel for hosting, preview deployments, and Web Analytics.

Redux Toolkit is not required for the first release because there is no server state, auth state, or multi-step application workflow. Add it only if a real cross-route client state need appears; local component state and URL search params should handle filters and navigation.

## Repository shape

Use one monorepo with two independently deployable Next.js apps and shared presentation/content utilities:

```text
apps/
  portfolio/       # project-led professional site
  blog/            # Substack-inspired publication
packages/
  content/         # schemas, loaders, project metadata, shared MDX utilities
  ui/              # only genuinely shared primitives, not page layouts
content/
  projects/        # portfolio case studies
  posts/           # blog essays and notes
public/
  portfolio/
  blog/
```

Create two Vercel projects pointing at `apps/portfolio` and `apps/blog`. This preserves the separate experiences while keeping one source of truth for verified project facts and links.

## Rendering strategy

- Prefer static generation for home, about, work, writing, and article routes.
- Use server components by default.
- Add client components only for motion, filters, reading progress, menu state, or analytics boundaries.
- Generate metadata, sitemap, RSS, and robots output at build time.

## Content structure

```text
content/
  posts/
    secure-ai-gateway.md
  projects/
    proxiai.mdx
    agentforge.mdx
    prism-ai.mdx
    sahyogi.mdx
    flash-sale-engine.mdx
    trg-store.mdx
public/
  images/
  diagrams/
  documents/
src/
  app/
  components/
  content/
  lib/
```

## Frontmatter contract

```yaml
title: "Readable title"
slug: "readable-title"
summary: "One-sentence promise to the reader."
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
tags: [AI, Security]
readingTime: "8 min"
featured: false
cover: "/images/readable-title.webp"
draft: false
```

## Data and security boundaries

- No secrets are needed for the static site except provider environment variables configured in Vercel.
- Never put private API keys, tokens, recovery codes, or unpublished documents in `public/`.
- External project links should use HTTPS and be reviewed before release.
- Sanitize or constrain any MDX features that can render arbitrary HTML.
- Keep downloadable files intentionally public and assume they can be indexed.

## Performance strategy

- Use `next/image` or an equivalent optimized image component.
- Prefer WebP or AVIF for photographic media and SVG or optimized PNG for diagrams.
- Lazy-load below-the-fold media and nonessential interactive scenes.
- Avoid shipping large animation libraries for a single transition.
- Check bundle size and mobile performance in CI or before release.

## Testing strategy

- Typecheck and lint on every pull request.
- Build the production site in CI.
- Add route smoke tests for all primary pages.
- Add Playwright checks for responsive layout, navigation, downloads, reduced motion, and nonblank interactive areas.
- Run Lighthouse or equivalent audits before the first public release.