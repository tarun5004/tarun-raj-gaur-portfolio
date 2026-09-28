import Link from 'next/link';
import { PostCard } from '@/features/publication/components/PostCard';
import { posts } from '@/features/publication/data/content';

export function generateStaticParams() {
  return Array.from(new Set(posts.map((post) => post.topic))).map((topic) => ({ topic: encodeURIComponent(topic) }));
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = decodeURIComponent(params.topic);
  const matching = posts.filter((post) => post.topic === topic);
  return <main className="archive-page"><div className="archive-shell"><header className="archive-header"><Link href="/" className="brand">Field Notes <span>/ topic</span></Link><Link href="/">Home →</Link></header><section className="archive-hero"><p>Topic archive</p><h1>{topic}</h1><span>{matching.length} notes in this thread.</span></section><div className="archive-grid">{matching.map((post) => <PostCard post={post} key={post.slug} />)}</div></div></main>;
}