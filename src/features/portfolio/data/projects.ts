export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  proof: string;
  status: string;
  accent: string;
  href: string;
  repo: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'proxiai',
    name: 'ProxiAI',
    eyebrow: 'Policy-aware AI gateway',
    description: 'A governed path between enterprise users and LLM providers, built around tenant scope, policy, and operational evidence.',
    proof: 'PII masking, provider failover, encrypted persistence, BullMQ accounting, audit trails, and AWS ECS deployment shape.',
    status: 'Pre-production MVP',
    accent: 'coral',
    href: '/work/proxiai',
    repo: 'https://github.com/tarun5004/ProxyAi',
    tags: ['AI systems', 'Security', 'AWS'],
    featured: true,
  },
  {
    slug: 'agentforge',
    name: 'AgentForge',
    eyebrow: 'AI code-generation workspace',
    description: 'A microservice platform where a prompt becomes a validated project revision inside a developer workspace.',
    proof: 'Auth boundaries, project persistence, generation flow, safe-file validation, and an execution boundary designed for later isolation.',
    status: 'Version Zero',
    accent: 'blue',
    href: '/work/agentforge',
    repo: 'https://github.com/tarun5004/AgentForge',
    tags: ['Microservices', 'AI', 'TypeScript'],
    featured: true,
  },
  {
    slug: 'prism-ai',
    name: 'PRism AI',
    eyebrow: 'Evidence-first code review',
    description: 'A pull request enters as a URL and leaves as a structured review report with evidence, risk signals, and suggested actions.',
    proof: 'GitHub retrieval, rule-based findings, optional structured AI, history, and a human-review dashboard.',
    status: 'Beta',
    accent: 'lime',
    href: '/work/prism-ai',
    repo: 'https://github.com/tarun5004/prism-ai',
    tags: ['Developer tools', 'MERN', 'AI'],
  },
  {
    slug: 'sahyogi',
    name: 'Sahyogi',
    eyebrow: 'Publishing platform foundation',
    description: 'A Substack-inspired platform for writers, publications, and reader communities.',
    proof: 'Next.js, Express, MongoDB, authenticated publishing workflows, and Cloudinary media integration.',
    status: 'Platform foundation',
    accent: 'yellow',
    href: '/work/sahyogi',
    repo: 'https://github.com/tarun5004/substack-gaur',
    tags: ['Publishing', 'Next.js', 'Product'],
  },
  {
    slug: 'flash-sale-engine',
    name: 'Flash Sale Engine',
    eyebrow: 'Commerce systems experiment',
    description: 'A commerce engineering project exploring the shape of a flash-sale workflow across Python and JavaScript surfaces.',
    proof: 'The source needs a deeper pass before publishing scale, consistency, or throughput claims.',
    status: 'Source review pending',
    accent: 'violet',
    href: '/work/flash-sale-engine',
    repo: 'https://github.com/tarun5004/Flash_Sale_Engine',
    tags: ['Commerce', 'Python', 'Systems'],
  },
  {
    slug: 'trg-store',
    name: 'TRG Store',
    eyebrow: 'Responsive storefront',
    description: 'A React and Vite storefront with catalog browsing, filters, product details, wishlist, and responsive UI.',
    proof: 'React 19, Vite, Tailwind, shadcn/ui, Zod, Axios, and a deployed storefront flow.',
    status: 'Deployed storefront',
    accent: 'ink',
    href: '/work/trg-store',
    repo: 'https://github.com/tarun5004/TRG-store',
    tags: ['Frontend', 'Commerce', 'React'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}