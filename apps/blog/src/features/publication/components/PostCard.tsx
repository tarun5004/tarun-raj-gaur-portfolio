import Link from 'next/link';
import { Avatar } from './Avatar';
import type { Post } from '@/features/publication/data/content';
import { getAuthor } from '@/features/publication/data/content';

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const author = getAuthor(post.authorHandle)!;
  return <article className={featured ? 'post-card post-card-featured' : 'post-card'}><div className="post-card-meta"><Avatar author={author} size="small" /><span>{author.name}</span><span>·</span><span>{post.publishedAt}</span></div><Link href={`/notes/${post.slug}`}><h2>{post.title}</h2><p>{post.excerpt}</p></Link><div className="post-card-footer"><span>{post.topic}</span><span>{post.readingTime}</span></div></article>;
}