import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Avatar } from '@/features/publication/components/Avatar';
import { PostCard } from '@/features/publication/components/PostCard';
import { authors, getAuthor, posts } from '@/features/publication/data/content';

export function generateStaticParams() {
  return authors.map((author) => ({ handle: author.handle }));
}

export default function ProfilePage({ params }: { params: { handle: string } }) {
  const author = getAuthor(params.handle);
  if (!author) notFound();
  const authorPosts = posts.filter((post) => post.authorHandle === author.handle);
  return <main className="profile-page"><div className="profile-shell"><header className="profile-header"><Link href="/" className="brand">Field Notes</Link><Link href="/">Back to feed →</Link></header><section className="profile-hero"><Avatar author={author} size="large" /><div><p>Author profile / @{author.handle}</p><h1>{author.name}</h1><strong>{author.role}</strong><span>{author.bio}</span><button type="button">Follow</button></div></section><section className="profile-posts"><p>Published notes / {authorPosts.length}</p><div>{authorPosts.map((post) => <PostCard post={post} key={post.slug} />)}</div></section></div></main>;
}