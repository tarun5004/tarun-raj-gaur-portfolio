import Link from 'next/link';
import { PostCard } from '@/features/publication/components/PostCard';
import { posts } from '@/features/publication/data/content';

export default function ArchivePage() {
  return <main className="archive-page"><div className="archive-shell"><header className="archive-header"><Link href="/" className="brand">Field Notes <span>/ archive</span></Link><Link href="/">Home →</Link></header><section className="archive-hero"><p>All publications / 2026</p><h1>The archive.</h1><span>Notes ordered by arrival, with the sharp edges left in.</span></section><div className="archive-grid">{posts.map((post) => <PostCard post={post} key={post.slug} />)}</div></div></main>;
}