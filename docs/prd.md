# Personal Portfolio and Engineering Blog PRD

## 1. Product Summary

Build two connected, frontend-only web experiences for Tarun Raj Gaur:

1. A project-led portfolio that makes the work, engineering judgment, and proof visible immediately.
2. A separate Substack-inspired technical publication for essays, analysis, photos, diagrams, and PDFs.

Both sites will be deployed to Vercel, preferably as two Vercel projects from one monorepo. There will be no user accounts, authentication, backend API, database, CMS, or private content in the first release. Content is version-controlled in the repository and published through the normal Git workflow.

## 2. Goals

- Present a memorable, technically credible portfolio.
- Publish practical writing about backend architecture, AI engineering, DevOps, security, and system design in a dedicated publication.
- Showcase six real repositories without reducing them to a generic technology grid.
- Make AgentForge and ProxiAI the primary deep case studies.
- Support photos, diagrams, downloadable PDFs, code links, and live demos where verified.
- Measure traffic and content engagement without building custom backend infrastructure.
- Make the site fast, accessible, responsive, and discoverable by search engines.

## 3. Non-goals for v1

- Authentication, user profiles, comments, likes, bookmarks, or subscriptions.
- Admin dashboards or in-browser editing.
- Custom backend services, database persistence, or server-side user data.
- Combining the portfolio and publication into one overloaded landing page.
- Copying the motion-web repository wholesale or reproducing its assets.
- A full analytics data warehouse or personally identifying visitor profiles.

## 4. Audience

| Audience | Need | Useful proof |
| --- | --- | --- |
| Recruiters and hiring managers | Quickly understand scope and strengths | Resume, projects, stack, outcomes |
| Engineers | Learn from implementation decisions | Deep-dive posts, diagrams, code links |
| Founders and collaborators | Assess technical range | Architecture, delivery, reliability, security |
| Students and early-career developers | Find practical learning material | Clear explanations, references, project lessons |

## 5. Positioning

**Working position:** Tarun builds secure, scalable systems where AI meets production engineering.

The voice should be direct, reflective, and technically specific. Articles should explain tradeoffs and failure modes, not just list tools.

## 5.1 Capability inventory

- **Frontend:** React.js, Next.js, Redux Toolkit, Tailwind CSS, HTML5, CSS3.
- **Backend:** Node.js, Express.js, REST APIs, JWT, OAuth, RBAC, Socket.io.
- **Data:** MongoDB, Redis, SQL.
- **DevOps and cloud:** Docker, Kubernetes, GitHub Actions, CI/CD, AWS, Git, Postman.
- **AI and architecture:** LangChain, RAG, MCP, prompt engineering, microservices, event-driven architecture, rate limiting, and API security.
- **Additional language:** Java.

## 6. Site relationship

### Portfolio site

The portfolio is the primary professional identity. Its home page is not a blog feed. It opens with a precise statement of focus, then moves quickly into selected work, systems thinking, and proof.

Primary navigation: `Work`, `About`, `Writing`, `CV`, `Contact`.

The `Writing` item is a bridge to the publication, with a small selection of recent essays and a clear `Read the publication` action. It does not duplicate the blog reading experience.

### Blog site

The blog is a publication with its own masthead, archive, topic index, article pages, media, and optional newsletter placeholder. It should feel closer to Substack, an annotated field journal, or a technical magazine than a portfolio tab.

The blog header links back to the portfolio using `View portfolio` and links to selected project case studies when an article relates to one.

Recommended deployment shape:

- `portfolio.<domain>` or the root domain for the portfolio.
- `notes.<domain>` or `blog.<domain>` for the publication.
- Keep both deployable independently from the same Git repository.

## 7. Information architecture

- `/` Portfolio home: identity, system focus, selected work, proof strip, writing bridge, and contact CTA.
- `/about` About: profile, education, training, working principles, and downloadable CV.
- `/work` Work index: project stories and filters by system/problem area.
- `/work/proxiai` ProxiAI case study.
- `/work/agentforge` AgentForge case study.
- `/work/prism-ai` PRism AI case study.
- `/work/sahyogi` Sahyogi publishing platform case study.
- `/work/flash-sale-engine` Flash Sale Engine case study.
- `/work/trg-store` TRG Store case study, with collaboration attribution confirmed before publication.
- `/writing` Portfolio writing bridge that links to the separate blog.
- `/contact` Contact links and collaboration context. No contact form required for v1.

### Blog routes

- `/` Publication home: publication title, author note, featured essay, latest archive, topics, and about link.
- `/archive` Chronological archive with topic and year filters.
- `/topics/[topic]` Topic archive.
- `/[slug]` Article page with reading progress, table of contents, related posts, and media.
- `/about` Publication/about-the-author page with a portfolio link.

## 7. Functional requirements

### Portfolio content

- Store project case studies and profile content as MDX or typed data.
- Each project must expose problem, role, system shape, decisions, evidence, status, links, and next steps.
- Show verified status labels such as `working beta`, `MVP`, `pre-production`, or `source review pending` rather than implying every project is production-ready.

### Blog content

- Store posts as Markdown or MDX in the publication app.
- Support frontmatter for title, slug, summary, date, updated date, tags, reading time, cover image, featured state, and related project.
- Render syntax-highlighted code, tables, callouts, links, images, captions, and downloadable PDFs.
- Include canonical URLs, Open Graph metadata, RSS, sitemap, and robots metadata.

### Navigation and interaction

- Persistent but compact navigation with clear active state.
- Keyboard-accessible menus, links, filters, and interactive motion.
- Blog archive filtering by topic and year without requiring a backend.
- Respect `prefers-reduced-motion` and provide a calm fallback.
- Preserve readable URLs and show a clear not-found state.

### Analytics

- Track page views, article views, referrers, device category, and top content using Vercel Web Analytics or an equivalent privacy-conscious provider.
- Track meaningful events such as outbound project clicks, CV downloads, PDF downloads, and article completion where supported.
- Do not collect unnecessary personal data or expose analytics credentials in client code.

## 8. Quality requirements

- Mobile-first and usable from 320px wide through large desktop screens.
- Lighthouse targets for production pages: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+ where practical.
- Avoid layout shift from images, embeds, or font loading.
- Every public page must have a unique title, description, canonical URL, and social preview.
- PDF and image assets must be compressed and have descriptive filenames.
- No critical interaction should depend on hover alone.

## 9. Success measures

- Visitors can identify Tarun's focus and strongest projects within 30 seconds on the portfolio.
- A visitor can tell within 5 seconds that the blog is a separate publication, not a duplicated portfolio page.
- The first three published articles each have a clear takeaway and at least one supporting visual.
- Core pages load quickly on a simulated mobile connection.
- Monthly review identifies top articles, referral sources, and content gaps.

## 10. Risks and decisions

- **Content freshness:** use a small publishing checklist and a predictable content folder.
- **Animation performance:** motion is reserved for meaning, hierarchy, and transitions; heavy WebGL is optional and not required for the first release.
- **Reference repo licensing:** motion-web is licensed CC BY-NC 4.0. Use its principles as inspiration and verify any code, assets, or derived work before reuse, especially if the portfolio later has commercial use.
- **Analytics privacy:** choose privacy-respecting measurement and publish a short privacy note before enabling tracking.

## 11. Release acceptance criteria

- Both sites have clear identity, navigation, metadata, and responsive layouts.
- All six repositories appear in the portfolio inventory, while ProxiAI and AgentForge have complete case-study pages first.
- The blog has a Substack-like archive and at least three article templates with code and media.
- CV download, external links, PDF links, sitemap, RSS, metadata, and analytics are verified in production.
- Both apps build successfully and deploy through their Vercel projects from the main branch.