import { createHash, randomUUID } from 'crypto';
import { getBlogDatabase, hasMongoConfig } from '@/lib/mongodb';

export type ManagedPostInput = { title: string; excerpt: string; body: string; topic: string; author: string; status: 'draft' | 'published'; assetUrl: string };
export type ManagedPost = ManagedPostInput & { id: string; slug: string; tokenHash: string; createdAt: string; updatedAt: string };
const globalForPosts = globalThis as typeof globalThis & { localPosts?: Map<string, ManagedPost> };
const sharedLocalPosts = globalForPosts.localPosts ?? (globalForPosts.localPosts = new Map<string, ManagedPost>());

function hashToken(token: string) { return createHash('sha256').update(token).digest('hex'); }
function slugify(title: string) { return title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || randomUUID(); }
function publicPost(post: ManagedPost) { const { tokenHash, ...safePost } = post; return safePost; }

export async function createPost(input: ManagedPostInput) {
  const token = randomUUID();
  const now = new Date().toISOString();
  const post: ManagedPost = { ...input, id: randomUUID(), slug: slugify(input.title), tokenHash: hashToken(token), createdAt: now, updatedAt: now };
  if (!hasMongoConfig()) sharedLocalPosts.set(post.id, post);
  else {
    const collection = (await getBlogDatabase()).collection<ManagedPost>('posts');
    await collection.createIndex({ slug: 1 }, { unique: true });
    await collection.createIndex({ status: 1, updatedAt: -1 });
    await collection.insertOne(post);
  }
  return { post: publicPost(post), token };
}

export async function updatePost(id: string, token: string, input: ManagedPostInput) {
  const tokenHash = hashToken(token);
  if (!hasMongoConfig()) {
    const current = sharedLocalPosts.get(id);
    if (!current || current.tokenHash !== tokenHash) return null;
    const updated = { ...current, ...input, slug: slugify(input.title), updatedAt: new Date().toISOString() };
    sharedLocalPosts.set(id, updated);
    return publicPost(updated);
  }
  const collection = (await getBlogDatabase()).collection<ManagedPost>('posts');
  const result = await collection.findOneAndUpdate({ id, tokenHash }, { $set: { ...input, slug: slugify(input.title), updatedAt: new Date().toISOString() } }, { returnDocument: 'after' });
  return result ? publicPost(result) : null;
}

export async function deletePost(id: string, token: string) {
  const tokenHash = hashToken(token);
  if (!hasMongoConfig()) {
    const current = sharedLocalPosts.get(id);
    if (!current || current.tokenHash !== tokenHash) return false;
    sharedLocalPosts.delete(id);
    return true;
  }
  const result = await (await getBlogDatabase()).collection<ManagedPost>('posts').deleteOne({ id, tokenHash });
  return result.deletedCount === 1;
}