import Link from 'next/link';
import { featuredPost, posts } from '@/features/publication/data/posts';
import { PublishedLocalPosts } from '@/features/studio/components/PublishedLocalPosts';
import { Footer } from '@/shared/components/Footer';
import { SiteHeader } from '@/shared/components/SiteHeader';

export function PublicationHome() {
  return (
    <main className="publication-page">
      <div className="publication-shell">
        <SiteHeader publication />
        <section className="publication-intro">
          <p className="eyebrow">A technical publication by Tarun Raj Gaur</p>
          <h1>Field Notes</h1>
          <p className="publication-dek">Essays about production AI, backend architecture, security boundaries, and the decisions that become visible only after the demo.</p>
        </section>
        <section className="featured-note">
          <div className="issue-art" aria-hidden="true"><span>ISSUE 001</span><strong>provider<br />switch</strong><i /></div>
          <div className="featured-note-copy">
            <div className="note-meta"><span>Featured / {featuredPost.topic}</span><span>{featuredPost.date}</span></div>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.dek}</p>
            <Link className="button button-dark" href={`/notes/${featuredPost.slug}`}>Read the note <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
        <section className="archive-section" id="archive">
          <div className="archive-heading"><p className="eyebrow">The archive</p><h2>Short notes for long problems.</h2><p>Read by topic, project, or in the order they arrived.</p></div>
          <div className="archive-list">
            {posts.map((post) => <Link className="archive-row" href={`/notes/${post.slug}`} key={post.slug}><span>{post.number}</span><div><strong>{post.title}</strong><p>{post.dek}</p></div><small>{post.topic}<br />{post.readingTime}</small></Link>)}
          </div>
        </section>
        <section className="publication-about"><p className="eyebrow">About this publication</p><div><h2>The portfolio shows what I build. These notes show how I think.</h2><Link className="text-link" href="/about">About Tarun <span aria-hidden="true">→</span></Link></div></section>
        <PublishedLocalPosts />
        <Footer publication />
      </div>
    </main>
  );
}