import Link from 'next/link';
import type { Post } from '@/features/publication/data/posts';
import { Footer } from '@/shared/components/Footer';
import { SiteHeader } from '@/shared/components/SiteHeader';

export function ArticlePage({ post }: { post: Post }) {
  const codeSample = 'if (streamStarted) {\n  return forwardProviderError(error);\n}\n\nreturn retryWithBoundedJitter(request);';
  return (
    <main className="publication-page">
      <div className="publication-shell">
        <SiteHeader publication />
        <article className="article-page">
          <header className="article-header"><p className="eyebrow">{post.number} / {post.topic} / {post.date}</p><h1>{post.title}</h1><p className="article-dek">{post.dek}</p><div className="article-meta">{post.readingTime} {post.project ? <><span>/</span> Part of the {post.project} project story</> : null}</div></header>
          <div className="article-layout"><aside className="article-aside"><span>On this page</span><a href="#thesis">The thesis</a><a href="#tradeoff">The tradeoff</a><a href="#takeaway">Takeaway</a></aside><div className="article-body"><p id="thesis" className="lead">A reliable AI system is defined as much by the moment it refuses to switch as by the moment it succeeds.</p><p>When a provider starts streaming a response, the system has crossed a boundary. Before the first token, a request can still be routed, retried, or rejected. After the first token, a second provider is not a transparent fallback. It is a different conversation with a different accounting story.</p><div className="article-callout"><span>Working rule</span><strong>Do not change providers after the first streamed token.</strong><p>Make the boundary explicit in the adapter contract, then test it as a property of the system.</p></div><h2 id="tradeoff">The tradeoff</h2><p>Retries are attractive because they make dashboards look healthy. But a retry that changes the provider after output has started can duplicate usage, confuse the user, and make a later audit impossible to explain. Reliability is not the absence of failure. It is the ability to fail without inventing a story.</p><div className="code-note"><span>adapter.ts</span><pre>{codeSample}</pre></div><p>The useful design move is to keep the provider adapter canonical and let the policy layer decide the retry boundary. This leaves the streaming path small enough to reason about and makes the dangerous case visible in review.</p><h2 id="takeaway">Takeaway</h2><p>In production AI, a fallback is only safe while the request is still reversible. After the first token, preserve the stream, preserve the evidence, and make the failure legible.</p><div className="article-end"><span>Related project</span><Link href="/work/proxiai">Read the ProxiAI case study <span aria-hidden="true">→</span></Link></div></div></div>
        </article>
        <Footer publication />
      </div>
    </main>
  );
}