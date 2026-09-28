# Design Direction

## North star

Two related but distinct experiences: a confident, project-led portfolio and a quieter technical publication. The portfolio should feel like entering Tarun's workshop; the blog should feel like opening a well-edited issue of his field notes.

## Reference influence

The referenced `motion-web` project treats motion as material: interactions have weight, momentum, and cause. We will borrow that design principle, not its implementation or assets. The first release should favor native CSS and lightweight React interactions. Canvas, WebGL, or complex physics should only be added when they improve storytelling and remain measurable on mobile.

## Visual language

- **Typography:** Use a distinctive editorial serif for display headlines paired with a highly legible sans-serif for UI and body copy. Avoid default system or interchangeable startup typography.
- **Color:** Use an off-white paper base, near-black ink, a warm signal color for emphasis, and a cool technical accent for diagrams and metadata. Keep contrast high and avoid a purple-first palette.
- **Portfolio layout:** Use large project chapters, asymmetric system diagrams, evidence strips, short metric-like facts, and intentional whitespace. Work is the visual hero.
- **Blog layout:** Use a calmer publication grid: masthead, featured story, issue/archive rhythm, topic index, and an exceptionally readable article column.
- **Texture:** Use restrained rules, grid traces, annotation marks, and image captions. The texture should support engineering documentation, not become decoration.
- **Shape:** Keep cards nearly square and use borders, underlines, and spacing for structure. Avoid nested card stacks.
- **Motion:** Use spring-like reveal, small positional drift, scroll-linked reading cues, and purposeful transitions. Avoid constant floating, generic fade-ins, and motion that delays reading.

## Page composition

### Portfolio home

1. Compact masthead with name, role, and two clear destinations: `Work` and `Read notes`.
2. A sharp statement about building secure, scalable AI systems.
3. Project constellation or timeline showing all six projects, with ProxiAI and AgentForge visually dominant.
4. One deep case-study preview with architecture evidence rather than a generic project card.
5. A small writing bridge with three latest essays and a publication link.
6. Capability signals grouped by outcomes: govern AI, ship services, operate systems.
7. Contact/footer band with CV, GitHub, and publication link.

### Blog home

1. Publication masthead with title, author identity, and link back to portfolio.
2. Featured essay with a strong editorial image or diagram.
3. Latest notes archive with date, topic, and reading time.
4. Topic index for AI systems, backend architecture, security, DevOps, and learning notes.
5. Small about-author block, not a duplicate portfolio hero.

### Article / note

- Article title, metadata, and a clear one-line thesis.
- Narrow reading column with generous line length and strong hierarchy.
- Sticky article outline on desktop; collapsible outline on mobile.
- Code blocks and diagrams treated as primary content, not ornamental cards.
- End matter with takeaway, references, related posts, and project links.
- Show the publication identity consistently while keeping the portfolio link visible but secondary.

### Case study

- Problem and context first.
- Architecture visual and system boundaries.
- Selected implementation decisions with tradeoffs.
- Reliability, security, and operational notes.
- Outcome, links, and what would be improved next.

## Interaction rules

- All interactive controls have visible focus states and accessible labels.
- Motion has a reduced-motion equivalent.
- Links indicate their destination; external links use a small icon and open deliberately.
- Download actions show file type and approximate size.
- Scroll effects never hide content or change reading order.

## Responsive rules

- Desktop can use asymmetry and margin notes; mobile returns to a single reading column.
- Navigation collapses into a simple menu below the tablet breakpoint.
- Tables become horizontally scrollable with a visible affordance.
- Code blocks scroll horizontally and never resize the page.
- Media reserves aspect-ratio space before loading.

## Content tone

Write with the calm confidence of someone who has debugged the system. Prefer specific claims, diagrams, failure analysis, and concise conclusions. Avoid inflated claims such as "revolutionary" or "seamless."