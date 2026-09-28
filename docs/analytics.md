# Analytics and Privacy Plan

## Measurement goals

Understand which writing and project pages are useful, how visitors discover each site, whether portfolio actions lead to meaningful engagement, and whether readers move naturally between the portfolio and publication.

## Initial events

| Event | Why it matters |
| --- | --- |
| Page view | Baseline traffic and route popularity |
| Article view | Identify writing that attracts attention |
| Article completion | Distinguish reading from a quick visit |
| Project link click | Measure interest in demonstrated work |
| CV download | Measure recruiter-oriented intent |
| PDF download | Measure demand for supporting material |
| External link click | Understand GitHub and live-demo interest |

## Provider

Start with Vercel Web Analytics for basic privacy-conscious traffic reporting on each Vercel project and a lightweight event layer only when the dashboard cannot answer a real question. Do not add multiple analytics providers in v1.

## Privacy rules

- Avoid collecting names, email addresses, raw IP addresses, or free-text user input.
- Do not use session recording or invasive fingerprinting for the first release.
- Publish a short privacy page describing the provider, purpose, and retention behavior.
- Respect browser privacy signals and provide a clear way to avoid optional analytics where required by the deployment region.
- Review provider terms and regional requirements before public launch.

## Monthly review

Review top pages, search/referral sources, device mix, article completion, outbound clicks, and broken routes. Use the findings to decide what to write next, not to optimize for page views alone.