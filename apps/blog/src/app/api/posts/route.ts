import { NextRequest, NextResponse } from 'next/server';
import { createPost } from '@/lib/repositories/posts';

export async function POST(request: NextRequest) {
  const input = await request.json();
  if (!input.title || !input.excerpt || !input.body || !input.topic || !input.author) return NextResponse.json({ error: 'title, excerpt, body, topic, and author are required' }, { status: 400 });
  try { return NextResponse.json(await createPost({ ...input, status: input.status === 'published' ? 'published' : 'draft', assetUrl: input.assetUrl || '' }), { status: 201 }); }
  catch { return NextResponse.json({ error: 'Unable to save post' }, { status: 503 }); }
}