import { notFound } from 'next/navigation';
import { ArticlePage } from '@/features/publication/components/ArticlePage';
import { getPost, posts } from '@/features/publication/data/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <ArticlePage post={post} />;
}