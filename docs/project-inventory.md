# Portfolio Project Inventory

This document is the source of truth for the project grid and the order in which case studies should be written. The portfolio should lead with engineering problems and decisions, not a flat list of technologies.

## Featured projects

### ProxiAI

**One-line story:** A policy-aware enterprise AI gateway that governs prompts before they reach providers and records safe operational evidence afterward.

**Show:** tenant-scoped authorization, PII detection and masking, policy decisions, provider adapters, streaming, retries, circuit breakers, encrypted persistence, BullMQ accounting and audit workflows, and the AWS ECS shape.

**Be precise about:** pre-production MVP status, Redis quota/credential recovery limitations, deferred prompt-cache replay, and lack of external penetration testing.

Repository: https://github.com/tarun5004/ProxyAi

### AgentForge

**One-line story:** A learning-focused microservice platform for generating code inside a developer workspace, with auth, project persistence, validated revisions, and an execution boundary planned separately.

**Show:** workspace UI, auth/session boundaries, service separation, generation flow, safe-file validation, project/revision lifecycle, and the deliberate decision to defer Kubernetes execution until the simpler flow works.

**Be precise about:** Version Zero is working; BullMQ, reload of saved revisions, execution runs, and Kubernetes workloads are future stages.

Repository: https://github.com/tarun5004/AgentForge

## Supporting projects

### PRism AI

An evidence-backed PR review assistant: GitHub URL to metadata/diff, simple risk rules, optional AI findings, history, and a dashboard. Position it as a human-review aid, not an autonomous merge gate.

Repository: https://github.com/tarun5004/prism-ai

### Sahyogi

The `substack-gaur` repository describes Sahyogi, a Substack-inspired publishing platform for writers, publications, and reader communities. Use it as proof of product and publishing-platform experience, then connect it naturally to the separate blog site.

Repository: https://github.com/tarun5004/substack-gaur

### Flash Sale Engine

Present this as an engineering experiment until the source is reviewed in detail. Do not publish throughput, consistency, or scale claims based only on the repository name. Capture the actual concurrency model, data flow, tests, and bottleneck findings first.

Repository: https://github.com/tarun5004/Flash_Sale_Engine

### TRG Store

Show the React 19/Vite storefront, product catalog, filters, product details, wishlist, responsive UI, and deployment. Confirm the collaboration and attribution story before describing ownership, because the repository credits another contributor and its README retains an older upstream clone command.

Repository: https://github.com/tarun5004/TRG-store

## Portfolio card rules

- Each card leads with the problem and outcome, not the framework list.
- Show a status badge such as `Version Zero`, `pre-production MVP`, `beta`, `platform foundation`, or `source review pending`.
- Include one proof line: architecture, security boundary, workflow, or measured behavior.
- Use repository and live-demo links only after checking they work.
- Reserve the full visual treatment for ProxiAI and AgentForge.