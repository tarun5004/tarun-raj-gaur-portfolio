import { NextRequest, NextResponse } from 'next/server';
import { deletePost, updatePost } from '@/lib/repositories/posts';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json() as { token?: string; title?: string; excerpt?: string; body?: string; topic?: string; author?: string; status?: 'draft' | 'published'; assetUrl?: string };
  if (!body.token || !body.title || !body.excerpt || !body.body || !body.topic || !body.author) return NextResponse.json({ error: 'complete post and token are required' }, { status: 400 });
  const post = await updatePost(params.id, body.token, { title: body.title, excerpt: body.excerpt, body: body.body, topic: body.topic, author: body.author, status: body.status === 'published' ? 'published' : 'draft', assetUrl: body.assetUrl || '' });
  return post ? NextResponse.json({ post }) : NextResponse.json({ error: 'Invalid edit token or post' }, { status: 403 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json() as { token?: string };
  if (!body.token) return NextResponse.json({ error: 'token is required' }, { status: 400 });
  return (await deletePost(params.id, body.token)) ? NextResponse.json({ ok: true }) : NextResponse.json({ error: 'Invalid edit token or post' }, { status: 403 });
}