# UI Specification

## Design tokens

The implementation should define tokens in one place so the visual system can evolve without scattered values.

| Token group | Direction |
| --- | --- |
| Canvas | Warm paper background and ink text with high contrast |
| Accent | One warm signal color for action and one cool technical accent |
| Border | Fine, low-contrast rules; stronger rules for section boundaries |
| Radius | 0-8px; rely on framing and spacing instead of pills |
| Container | Reading width around 680-760px; site width around 1180-1280px |
| Body type | Comfortable reading size and line height; no viewport-scaled font sizes |
| Display type | Large but controlled, with intentional line breaks |
| Spacing | 4px base scale with larger editorial bands |
| Motion | Short, spring-like transitions; reduced-motion fallback |

## Two application shells

### Portfolio shell

The portfolio shell owns professional identity, project navigation, case-study presentation, CV, and contact. It should feel active and spatial, with the strongest motion and architecture visuals.

### Publication shell

The blog shell owns publication identity, archive navigation, topics, article reading, and media. It should feel quieter and more typographic. It links to the portfolio in the header and article end matter but does not reuse the portfolio hero or project grid as its primary structure.

## Component inventory

### Global

- `SiteHeader`: logo/name, primary nav, active route, menu button.
- `SiteFooter`: contact links, GitHub, CV, copyright, privacy link.
- `PortfolioHeader`: portfolio navigation and `Read notes` bridge.
- `PublicationHeader`: publication title, archive/topics navigation, and `View portfolio` bridge.
- `SkipLink`: keyboard access to main content.
- `PageFrame`: global background, max-width, responsive gutters.
- `ExternalLink`: destination and external indicator.

### Portfolio

- `HeroIntro`: role, positioning statement, current focus, primary actions.
- `ProjectFeature`: project name, outcome, stack, architecture cue, link.
- `ProjectGrid`: responsive index with category metadata.
- `ProjectTimeline`: chronology for education and training.
- `CapabilityList`: grouped capabilities with evidence links.

### Writing

- `PostCard`: title, summary, date, tags, reading time, cover.
- `PublicationFeature`: featured essay treatment for the blog home.
- `ArchiveList`: chronological issue-style list for the blog.
- `PostFilters`: topic and year controls with URL state where useful.
- `ArticleHeader`: title, thesis, metadata, cover media.
- `ArticleBody`: MDX typography, code, callouts, media, and footnotes.
- `TableOfContents`: heading links with active section state.
- `ReadingProgress`: visual progress only; never the sole navigation cue.
- `RelatedPosts`: small set of relevant articles.

### Media and utility

- `MediaFigure`: responsive image, caption, source, and alt text.
- `PdfDownload`: title, file type, size, and download action.
- `ArchitectureDiagram`: accessible fallback text plus visual diagram.
- `EmptyState` and `NotFound`: useful recovery links.
- `AnalyticsProvider`: client-side provider boundary with no business logic.

## Interaction states

Every interactive component needs default, hover, focus-visible, active, disabled, loading, and reduced-motion behavior where relevant. Focus must be obvious against both the paper background and technical accent surfaces.

## Accessibility baseline

- Semantic landmarks and heading order.
- Full keyboard operation.
- Visible focus rings.
- Alt text for meaningful images; empty alt for decorative images.
- Captions and transcripts for non-text media where needed.
- Contrast tested for body, metadata, links, and muted text.
- `aria-current` for active navigation and filters.
- No auto-playing audio.

## Acceptance checklist

- No text overflows its container at mobile or desktop widths.
- No layout shift while images and fonts load.
- Buttons use familiar icons where an icon is enough, with tooltips for unfamiliar icon-only controls.
- The UI still communicates hierarchy with motion disabled.
- A visitor can reach every primary route from the header or footer.