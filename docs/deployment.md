# Deployment and Operations

## Hosting

Deploy the portfolio and blog as two Vercel projects from the same Git repository. Each project should have its own root directory, build output, environment settings, and production domain. Preview deployments should be generated for pull requests so both experiences can be reviewed before production.

Suggested Vercel project configuration:

| Project | Root directory | Production role |
| --- | --- | --- |
| `tarun-portfolio` | `apps/portfolio` | Main professional site |
| `tarun-notes` | `apps/blog` | Separate technical publication |

Use a shared package for verified project facts and content utilities, but keep page composition and visual shells independent.

## Required checks

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Route smoke tests and link checks
- Responsive and reduced-motion browser checks

## Environment variables

Keep the first release close to zero secrets. Any analytics or external integration variable must be configured in Vercel, documented by purpose, and prefixed only when it is safe to expose to the browser.

Never commit tokens, private documents, recovery codes, or local environment files.

## Release checklist

- Verify production build and all primary routes.
- Verify portfolio-to-blog and blog-to-portfolio links in both directions.
- Verify CV and PDF downloads with correct filenames.
- Verify external GitHub, live demo, and social links.
- Verify social metadata and favicon.
- Verify sitemap, RSS, robots, and canonical URLs.
- Check analytics events once in production.
- Review mobile layout, keyboard navigation, and reduced motion.
- Record the release date and notable changes.

## Rollback

Use the previous successful Vercel deployment when a release introduces broken routes, invalid content, or a major performance regression. Fix the branch separately and redeploy after validation.

## Asset policy

Only publish media that Tarun owns, has permission to use, or can legally redistribute. Keep source and license notes near any third-party asset. Treat the referenced motion-web repository as CC BY-NC 4.0 unless its licensing is independently reviewed for the intended use.