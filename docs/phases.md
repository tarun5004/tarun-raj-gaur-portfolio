# Delivery Phases

## Phase 0: Foundation and decisions

**Outcome:** a runnable Next.js shell and agreed content/design foundations.

- Initialize the monorepo with two Next.js apps: portfolio and blog.
- Add TypeScript, Tailwind CSS, linting, formatting, and shared content schemas.
- Define tokens, typography, layout primitives, and content contracts.
- Add repository guidance and a minimal README.
- Confirm public links, CV version, domain, and analytics provider.

**Exit check:** both app builds succeed and the base layouts work at mobile and desktop widths.

## Phase 1: Portfolio core

**Outcome:** a credible public portfolio even before the blog is full.

- Build the project-led portfolio header, footer, home, about, work index, and project routes.
- Add all six projects to the inventory; write ProxiAI and AgentForge as the first deep case studies.
- Add CV download and verified GitHub/live links.
- Add metadata, sitemap, robots, and 404 state.

**Exit check:** a recruiter can understand role, skills, projects, and contact path in under one minute.

## Phase 2: Separate publication

**Outcome:** reliable repository-based publishing.

- Add MDX parsing and frontmatter validation to the blog app.
- Build the publication masthead, featured story, archive, topic pages, article layout, code blocks, table of contents, and related posts.
- Add the portfolio/blog cross-links without duplicating either site's home page.
- Add the first three technical posts and supporting media.
- Add RSS feed and social previews.

**Exit check:** a new post can be added by creating one content file and its media without editing route logic, and the blog feels like a publication on a direct visit.

## Phase 3: Motion and polish

**Outcome:** a distinctive but performant interface.

- Add meaningful transitions and scroll cues inspired by motion-web principles.
- Add one signature interactive system motif to the portfolio home, not the blog reading surface.
- Implement reduced-motion behavior and verify touch interaction.
- Tune typography, media framing, loading states, and error states.

**Exit check:** motion improves orientation and hierarchy, while the site remains usable with motion disabled.

## Phase 4: Analytics and release

**Outcome:** measurable, production-ready deployment.

- Add Vercel Web Analytics and selected events.
- Add privacy page and content/media ownership review.
- Run typecheck, lint, build, route smoke tests, responsive checks, and Lighthouse.
- Configure Vercel preview and production deployments.
- Connect the custom domain if available.

**Exit check:** production URL is stable, metadata is verified, downloads work, and analytics data is visible.

## Phase 5: Iteration

**Outcome:** sustainable publishing rather than one-time launch.

- Publish one substantial article or case-study update every 2-4 weeks.
- Review analytics monthly and update the writing backlog.
- Refresh project outcomes and links quarterly.
- Add new interaction experiments only when they support content.

## Priority labels

- **P0:** required for launch: core routes, projects, article template, accessibility, SEO, deployment.
- **P1:** valuable after launch: RSS, filters, analytics events, reading progress, richer diagrams.
- **P2:** exploratory: WebGL scenes, search indexing, newsletter, comments, CMS integration.