import Link from 'next/link';

const posts = [
  ['001', 'The cost of a provider switch mid-stream', 'AI systems', 'A reliable stream becomes a commitment after the first token.', 'the-cost-of-a-provider-switch-mid-stream'],
  ['002', 'Tenant isolation is a query discipline', 'Security', 'Every read, write, log, and job must remember the boundary.', 'tenant-isolation-is-a-query-discipline'],
  ['003', 'A code-generation workspace needs a revision model', 'Architecture', 'Generated files become useful when they can be inspected and compared.', 'a-code-generation-workspace-needs-a-revision-model'],
];

export default function BlogHome() {
  const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'http://localhost:3000';
  return <main className="blog-page"><div className="blog-shell"><header><Link href="/" className="brand">Field Notes <span>/ Tarun Raj Gaur</span></Link><nav><Link href="#archive">Archive</Link><Link href="/studio">Studio</Link><a href={portfolioUrl}>View portfolio {'->'}</a></nav></header><section className="blog-hero"><p>Technical publication / 2026</p><h1>Field Notes</h1><span>Production AI, backend architecture, security boundaries, and the decisions that become visible after the demo.</span></section><section className="featured"><div><span>Issue 001 / AI systems</span><h2>{posts[0][1]}</h2><p>{posts[0][3]}</p><Link href={`/notes/${posts[0][4]}`}>Read the note {'->'}</Link></div><div className="feature-mark">01<br /><strong>stream</strong></div></section><section id="archive" className="archive"><p>Archive</p>{posts.map(([number, title, topic, dek, slug]) => <Link href={`/notes/${slug}`} key={slug}><span>{number} / {topic}</span><strong>{title}</strong><small>{dek}</small></Link>)}</section><footer><span>Field Notes</span><a href={portfolioUrl}>Back to portfolio {'->'}</a></footer></div></main>;
}