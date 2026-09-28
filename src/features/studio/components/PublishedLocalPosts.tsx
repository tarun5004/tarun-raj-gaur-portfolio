'use client';

import { useEffect, useState } from 'react';
import { readStudioPosts } from '@/features/studio/data/storage';
import type { StudioPost } from '@/features/studio/data/studioTypes';

export function PublishedLocalPosts() {
  const [posts, setPosts] = useState<StudioPost[]>([]);

  useEffect(() => {
    setPosts(readStudioPosts().filter((post) => post.status === 'published'));
  }, []);

  if (posts.length === 0) return null;

  return <section className="local-published"><p className="eyebrow">Published in this browser</p><div>{posts.map((post) => <article key={post.id}><span>{post.topic} / {post.author}</span><h2>{post.title}</h2><p>{post.excerpt}</p><small>{post.updatedAt}</small></article>)}</div></section>;
}