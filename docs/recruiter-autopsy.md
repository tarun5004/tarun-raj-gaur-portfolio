# Recruiter and Hiring Manager Autopsy

## First impression

The current experience has a strong visual point of view, but a recruiter has to infer too much. The phrase `engineer in progress` weakens the first screen, the portfolio does not state the target role, and there is no fast proof strip for scope, current availability, or strongest evidence.

## Hiring gaps found

### 1. Positioning is interesting but not searchable

The homepage should say **Full-stack AI systems engineer** in the first viewport. The creative statement can remain as the supporting line, but the role should not be hidden inside editorial language.

### 2. Proof is not scannable enough

Hiring managers need to see the pattern quickly:

- Two flagship systems: ProxiAI and AgentForge.
- Six public projects across AI, backend, security, publishing, and commerce.
- Core strengths: Node/Express, Next/React, MongoDB/Redis, Docker/AWS/Kubernetes, and AI platform design.
- Current education and training context.

This is not a vanity metrics problem. We should not invent users, revenue, latency, or uptime. Use evidence labels, architecture boundaries, shipped scope, and honest status instead.

### 3. Project pages need a hiring narrative

Every case study should answer, in order: what was the problem, what was Tarun's role, what decisions were made, what is actually working, and what remains. The current generic case-study template is a useful shell but needs project-specific evidence before launch.

### 4. The CTA path is incomplete

Add a direct email/contact action and a CV action. A recruiter should not need to search the footer to understand how to start a conversation.

### 5. The portfolio/blog relationship is good but the editorial product is not yet operational

The public publication looks like a publication, but posts are currently static TypeScript data. There is no create, edit, draft, publish, delete, token recovery, or author ownership flow.

## Changes applied by this phase

- Replace weak first-screen positioning with role plus specialty.
- Add recruiter proof signals without fabricated metrics.
- Add a clear `Studio` entry point from the publication.
- Add local CRUD for drafts/posts with a generated author edit token.
- Add production boundary documentation so the frontend demo is not mistaken for secure multi-author authorization.
- Add `npm run verify` as the single typecheck/build gate.

## Launch blockers remaining

- Move editorial records and token verification to a server-side database/API before accepting real public authors.
- Add hashed tokens, expiry/revocation, rate limiting, CSRF protection, and audit history in the production editor.
- Replace placeholder article bodies with reviewed, complete content.
- Add real media assets, RSS, sitemap, and analytics provider configuration.