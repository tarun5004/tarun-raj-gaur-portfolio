export type Post = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  topic: string;
  project?: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: 'the-cost-of-a-provider-switch-mid-stream',
    number: '001',
    title: 'The cost of a provider switch mid-stream',
    dek: 'Streaming reliability is not only about retrying. It is about deciding when the response has become a commitment you cannot silently move.',
    date: 'Sep 18, 2026',
    readingTime: '8 min read',
    topic: 'AI systems',
    project: 'ProxiAI',
    featured: true,
  },
  {
    slug: 'tenant-isolation-is-a-query-discipline',
    number: '002',
    title: 'Tenant isolation is a query discipline',
    dek: 'The hard part of multi-tenancy is not naming the organisation field. It is making every read, write, log, and job remember the boundary.',
    date: 'Sep 08, 2026',
    readingTime: '6 min read',
    topic: 'Security',
    project: 'ProxiAI',
  },
  {
    slug: 'a-code-generation-workspace-needs-a-revision-model',
    number: '003',
    title: 'A code-generation workspace needs a revision model',
    dek: 'Generated files become useful when they can be inspected, compared, and explained. A chat transcript alone is not a project history.',
    date: 'Aug 29, 2026',
    readingTime: '7 min read',
    topic: 'Architecture',
    project: 'AgentForge',
  },
  {
    slug: 'review-tools-should-show-their-evidence',
    number: '004',
    title: 'Review tools should show their evidence',
    dek: 'An AI review is easier to trust when a human can trace every warning back to the changed file, rule, and supporting context.',
    date: 'Aug 17, 2026',
    readingTime: '5 min read',
    topic: 'Developer tools',
    project: 'PRism AI',
  },
];

export const featuredPost = posts.find((post) => post.featured) ?? posts[0];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}