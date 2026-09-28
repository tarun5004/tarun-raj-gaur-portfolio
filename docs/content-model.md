# Content Model and Editorial Workflow

## Content types

### Article

An article teaches one focused idea through explanation, implementation detail, analysis, or a postmortem.

Required: title, summary, date, slug, tags, body, and an honest reading time.

Recommended: cover image, diagram, code example, references, related project, and takeaway.

### Project case study

A case study explains the problem, architecture, decisions, constraints, outcomes, and next steps of a project.

Required: project name, period, role, stack, links, problem, approach, and outcome.

Recommended: architecture diagram, security/reliability notes, selected code, and lessons learned.

### Project inventory record

Keep a typed inventory separate from the long-form case study so the portfolio can honestly represent incomplete or collaborative work.

Required: display name, repository URL, primary category, stack, role, status, evidence level, and public links.

Evidence levels:

- `deep`: README and source support a detailed case study.
- `standard`: README supports a concise project story.
- `verify`: source inspection or author confirmation is still needed.

## Verified project inventory

| Project | Portfolio angle | Evidence level | Current status |
| --- | --- | --- | --- |
| AgentForge | Microservice AI code-generation workspace with auth, project persistence, generation flow, and a Cursor-inspired workspace | deep | Version Zero working foundation; queues and Kubernetes previews are future work |
| ProxiAI | Policy-aware enterprise AI gateway with tenant isolation, PII controls, provider reliability, audit, billing, and operational safeguards | deep | Pre-production MVP; deployment certification and external operational gaps remain |
| PRism AI | Evidence-first GitHub pull-request review assistant using rules and optional structured AI | standard | Beta; webhooks, merge gates, AST analysis, and advanced analytics deferred |
| Sahyogi (`substack-gaur`) | Substack-inspired publishing platform with Next.js, Express, auth, MongoDB, and Cloudinary media workflows | standard | Platform foundation and cleanup/stabilization branch |
| Flash Sale Engine | High-concurrency commerce/flash-sale engineering experiment with Python and JavaScript surfaces | verify | Source and README need review before making performance claims |
| TRG Store | React/Vite storefront with product browsing, filtering, wishlist, client-side auth, and responsive UI | standard | Deployed storefront; confirm authorship and collaboration attribution |

Do not turn status labels into claims of production readiness. Link to the repository and live demo when available.

### Media asset

An image, diagram, screenshot, or PDF that supports a specific page.

Required: descriptive filename, source/ownership note, alt text or document description, and usage context.

## Initial editorial pillars

- Production AI systems: gateways, RAG, agents, evaluation, and operational controls.
- Backend architecture: APIs, microservices, queues, caching, and event-driven systems.
- Security and reliability: RBAC, rate limiting, isolation, failure analysis, and resource management.
- DevOps practice: Docker, Kubernetes, AWS, CI/CD, and observability.
- Learning notes: clear explanations from MCA study and engineering practice.

## First content set

1. ProxiAI: building a policy-controlled enterprise AI gateway.
2. What tenant isolation means in a multi-tenant AI system.
3. AgentForge: designing an event-driven code generation platform.
4. Debugging HTTP agent connection exhaustion in an Express proxy.
5. PRism AI: making code review findings evidence-first.
6. Sahyogi: what a publishing platform needs beyond a rich editor.
7. Redis, BullMQ, and provider failover for streaming AI workloads.

## Publishing checklist

- Is the thesis clear in one sentence?
- Does the post contain a concrete example, diagram, or failure mode?
- Are claims supported by code, measurements, or references?
- Are secrets, private URLs, credentials, and sensitive customer details removed?
- Are images compressed and described?
- Does the page have metadata, related links, and a useful conclusion?
- Has it been checked on mobile and with reduced motion?
- Has the production build and link checker passed?

## Voice rules

Use first person for experience and ownership. Explain uncertainty honestly. Prefer "I chose X because..." and "This failed because..." over generic advice. Keep titles specific and searchable.