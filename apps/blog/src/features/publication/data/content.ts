export type Author = {
  handle: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  accent: string;
};

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; url: string; alt: string; caption: string }
  | { type: 'quote'; text: string }
  | { type: 'code'; language: string; code: string };

export type Post = {
  slug: string;
  number: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  topic: string;
  tags: string[];
  authorHandle: string;
  featured?: boolean;
  blocks: ContentBlock[];
};

export const authors: Author[] = [
  {
    handle: 'tarun',
    name: 'Tarun Raj Gaur',
    role: 'Full-stack AI systems engineer',
    bio: 'Building secure AI platforms, backend services, and developer tools from idea to deployment.',
    avatarUrl: 'https://github.com/tarun5004.png',
    accent: '#f26d4f',
  },
  {
    handle: 'field-notes',
    name: 'Field Notes Desk',
    role: 'Community publication',
    bio: 'A shared shelf for practical notes on software, systems, and the work between them.',
    avatarUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=160&q=80',
    accent: '#f0c76a',
  },
];

export const posts: Post[] = [
  {
    slug: 'the-cost-of-a-provider-switch-mid-stream', number: '001', title: 'The cost of a provider switch mid-stream',
    excerpt: 'A reliable stream becomes a commitment after the first token.', publishedAt: 'Sep 18, 2026', readingTime: '8 min read', topic: 'AI systems', tags: ['GenAI', 'Reliability', 'Streaming'], authorHandle: 'tarun', featured: true,
    blocks: [
      { type: 'paragraph', text: 'When a provider starts streaming a response, the system has crossed a boundary. Before the first token, a request can still be routed, retried, or rejected. After the first token, a second provider is not a transparent fallback.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85', alt: 'Circuit board showing connected systems', caption: 'Reliability is a boundary decision, not only a retry policy.' },
      { type: 'quote', text: 'Do not change providers after the first streamed token.' },
      { type: 'paragraph', text: 'The useful design move is to keep the provider adapter canonical and let the policy layer decide the retry boundary. This leaves the streaming path small enough to reason about and makes the dangerous case visible in review.' },
      { type: 'code', language: 'typescript', code: 'if (streamStarted) {\n  return forwardProviderError(error);\n}\n\nreturn retryWithBoundedJitter(request);' },
    ],
  },
  {
    slug: 'tenant-isolation-is-a-query-discipline', number: '002', title: 'Tenant isolation is a query discipline',
    excerpt: 'Every read, write, log, and job must remember the boundary.', publishedAt: 'Sep 08, 2026', readingTime: '6 min read', topic: 'Security', tags: ['RBAC', 'MongoDB', 'Architecture'], authorHandle: 'tarun',
    blocks: [{ type: 'paragraph', text: 'The hard part of multi-tenancy is not naming the organisation field. It is making every read, write, log, and job remember the boundary.' }, { type: 'quote', text: 'The trusted tenant scope belongs to the server, not the request body.' }, { type: 'paragraph', text: 'A query that is correct in isolation can still be unsafe when its scope is inferred from client input. Tenant context should be resolved once, carried through the service boundary, and applied to every owned resource operation.' }],
  },
  {
    slug: 'a-code-generation-workspace-needs-a-revision-model', number: '003', title: 'A code-generation workspace needs a revision model',
    excerpt: 'Generated files become useful when they can be inspected and compared.', publishedAt: 'Aug 29, 2026', readingTime: '7 min read', topic: 'Architecture', tags: ['Agents', 'Developer tools', 'TypeScript'], authorHandle: 'tarun',
    blocks: [{ type: 'paragraph', text: 'A chat transcript is not a project history. Generated files become useful when they can be inspected, compared, and explained.' }, { type: 'image', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85', alt: 'Code editor on a laptop', caption: 'A workspace needs artifacts that can outlive the conversation.' }, { type: 'paragraph', text: 'The revision model is the bridge between an AI answer and an engineering workflow: immutable enough to inspect, structured enough to render, and explicit enough to retry.' }],
  },
  {
    slug: 'review-tools-should-show-their-evidence', number: '004', title: 'Review tools should show their evidence',
    excerpt: 'An AI review is easier to trust when a human can trace every warning to the changed file.', publishedAt: 'Aug 17, 2026', readingTime: '5 min read', topic: 'Developer tools', tags: ['PRism AI', 'Code review', 'AI'], authorHandle: 'field-notes',
    blocks: [{ type: 'paragraph', text: 'An AI review is easier to trust when a human can trace every warning back to the changed file, rule, and supporting context.' }, { type: 'paragraph', text: 'The reviewer should be able to ask what changed, why it matters, and which evidence supports the suggestion. Automation should make that path shorter, not hide it.' }],
  },
];

export const topics = Array.from(new Set(posts.map((post) => post.topic)));
export const featuredPost = posts.find((post) => post.featured) ?? posts[0];
export const getAuthor = (handle: string) => authors.find((author) => author.handle === handle);
export const getPost = (slug: string) => posts.find((post) => post.slug === slug);