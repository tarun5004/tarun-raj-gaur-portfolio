# Portfolio and Blog Data Autopsy

## Findings

### Portfolio

- Strong project evidence exists, but the portfolio needs project-specific role, outcomes, and verification notes before hiring claims are treated as complete.
- Avoid invented metrics. Use architecture boundaries, shipped scope, status, repository links, and explicit next proof.
- Keep the portfolio as the professional front door and the publication as the deeper thinking surface.

### Blog

- The public reader now has canonical posts, search, topics, archives, profiles, avatars, media blocks, and article metadata.
- Follow now persists through a server API. Without `MONGODB_URI`, development uses an in-memory fallback and resets on process restart.
- Editorial posts created by Studio are still browser-local. They must not be marketed as durable multi-author publishing until the posts API is connected to MongoDB.

## MongoDB collections

### `authors`

One bounded document per author: `handle`, `name`, `role`, `bio`, `avatarUrl`, `status`, and timestamps. Keep profile media as a URL/reference, not binary data.

### `posts`

One document per canonical post: `slug`, `authorHandle`, `title`, `excerpt`, `blocks`, `topic`, `tags`, `status`, `publishedAt`, `updatedAt`, and `media`. Content blocks are embedded because the article is read as one unit; uploads remain in Cloudinary.

Indexes: unique `slug`; compound `{ status: 1, publishedAt: -1 }`; `{ authorHandle: 1, publishedAt: -1 }`; `{ topic: 1, publishedAt: -1 }`.

### `follows`

One edge per reader/author pair: `readerId`, `authorHandle`, `createdAt`. Unique compound index `{ readerId: 1, authorHandle: 1 }`. This avoids an unbounded follower array on the author document.

## Security and operations

- The current anonymous reader cookie is suitable for a low-friction prototype, not identity or abuse prevention.
- Production authors need server-side sessions or expiring edit tokens, rate limiting, moderation, audit logs, and token hashing.
- Uploads need file-size limits, MIME/content validation, Cloudinary folder policies, ownership checks, and a cleanup path.
- MongoDB connection pooling is intentionally conservative for Vercel serverless instances: one cached client, `maxPoolSize: 5`, bounded idle time, and short selection/connect timeouts.

## Release gates

- Search returns only matching published posts.
- Unknown slugs return 404.
- Follow/unfollow is idempotent and does not duplicate edges.
- Profile photos have meaningful accessible labels.
- Drafts are never served from public routes.
- A MongoDB outage leaves the reader UI usable and reports a recoverable follow error.