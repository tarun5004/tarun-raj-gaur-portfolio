import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArticleContent } from '@/features/publication/components/ArticleContent';
import { Avatar } from '@/features/publication/components/Avatar';
import { getAuthor, getPost, posts } from '@/features/publication/data/content';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  return { title: post ? `${post.title} | Field Notes` : 'Note not found | Field Notes', description: post?.excerpt };
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const author = getAuthor(post.authorHandle)!;
  return <main className="article-app"><div className="article-shell"><header className="article-nav"><Link href="/" className="brand">Field Notes <span>/ publication</span></Link><nav><Link href="/archive">Archive</Link><Link href={`/profile/${author.handle}`}>Profile</Link><Link href="/studio">Studio</Link></nav></header><article className="full-article"><header className="full-article-header"><p>{post.topic} / {post.publishedAt} / {post.readingTime}</p><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p><Link className="article-author" href={`/profile/${author.handle}`}><Avatar author={author} size="medium" /><span><strong>{author.name}</strong><small>{author.role}</small></span></Link></header><ArticleContent blocks={post.blocks} /><footer className="article-footer"><Link href="/">← Back to Field Notes</Link><Link href={`/topics/${encodeURIComponent(post.topic)}`}>More {post.topic} notes →</Link></footer></article></div></main>;
}