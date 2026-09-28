# Editorial Studio and CRUD Contract

## Product decision

The public blog remains readable without authentication. `/studio` is an editorial workspace where a writer can create, edit, publish, unpublish, and delete notes using a per-note edit token.

## Current implementation: local-first editorial prototype with persistent follow API

The current frontend-only app stores records in browser `localStorage` and generates a random token with `crypto.randomUUID()`. The token is shown to the author once and is required for later edit/delete actions in that browser.

This is useful for validating the interaction and content model. It is **not secure authorization** and it is not cross-device persistence. Clearing storage loses the records and token. Follows now use the `/api/follows` server boundary and MongoDB when configured, with an in-memory development fallback.

## Note states

- `draft`: visible only in Studio.
- `published`: visible in the Studio and public archive.
- `archived`: retained in Studio but removed from the public archive.

## CRUD behavior

| Action | Requirement |
| --- | --- |
| Create | Title, excerpt, topic, author, body, and status are required. A token is generated. |
| Read | Public readers see published notes. Authors see their local records after token verification. |
| Update | Token must match the note's local edit token. Updated time changes on save. |
| Publish | A draft can become public after the author explicitly changes status. |
| Unpublish | A published note can return to draft without deleting content. |
| Delete | Token must match; deletion requires a confirmation step. |

## Production architecture required for real multi-author use

```text
Browser -> Next.js server action/API -> database
                         |
                         +-> hashed edit token verification
                         +-> rate limit and audit log
                         +-> object storage for images/PDFs
```

Recommended production options: Vercel Postgres or MongoDB Atlas for notes/authors, Vercel Blob or Cloudinary for media, and a server-side route handler for token verification. Store only a hash of the edit token, issue a revocable token, expire it, and never return it from public routes.

## Product gaps deliberately not hidden

- A token in a browser-only app can be copied and localStorage can be modified.
- Without a backend, two authors cannot collaborate on the same canonical record.
- Public writes need abuse controls, moderation, spam prevention, and rate limits.
- PDFs and photos need ownership checks, size limits, MIME validation, and malware scanning before production upload.