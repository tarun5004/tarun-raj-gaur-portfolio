import { randomUUID } from 'crypto';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getFollowState, setFollowState } from '@/lib/repositories/follows';

function readerId() {
  return cookies().get('field_notes_reader')?.value || randomUUID();
}

function response(data: object, id: string) {
  const result = NextResponse.json(data);
  result.cookies.set('field_notes_reader', id, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 24 * 365 });
  return result;
}

export async function GET(request: NextRequest) {
  const authorHandle = request.nextUrl.searchParams.get('authorHandle');
  if (!authorHandle) return NextResponse.json({ error: 'authorHandle is required' }, { status: 400 });
  const id = readerId();
  return response(await getFollowState(id, authorHandle), id);
}

export async function POST(request: NextRequest) {
  const body = await request.json() as { authorHandle?: string; following?: boolean };
  if (!body.authorHandle || typeof body.following !== 'boolean') return NextResponse.json({ error: 'authorHandle and following are required' }, { status: 400 });
  const id = readerId();
  try {
    return response(await setFollowState(id, body.authorHandle, body.following), id);
  } catch {
    return response({ error: 'Follow service unavailable' }, id);
  }
}