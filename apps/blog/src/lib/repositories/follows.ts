import { getBlogDatabase, hasMongoConfig } from '@/lib/mongodb';

type FollowEdge = { readerId: string; authorHandle: string; createdAt: string };
const localFollows = new Set<string>();

function edgeKey(readerId: string, authorHandle: string) {
  return `${readerId}:${authorHandle}`;
}

export async function getFollowState(readerId: string, authorHandle: string) {
  if (!hasMongoConfig()) {
    const key = edgeKey(readerId, authorHandle);
    return { following: localFollows.has(key), followerCount: Array.from(localFollows).filter((edge) => edge.endsWith(`:${authorHandle}`)).length, storage: 'memory' as const };
  }
  const database = await getBlogDatabase();
  const collection = database.collection<FollowEdge>('follows');
  await collection.createIndex({ readerId: 1, authorHandle: 1 }, { unique: true });
  const [edge, followerCount] = await Promise.all([
    collection.findOne({ readerId, authorHandle }),
    collection.countDocuments({ authorHandle }),
  ]);
  return { following: Boolean(edge), followerCount, storage: 'mongodb' as const };
}

export async function setFollowState(readerId: string, authorHandle: string, following: boolean) {
  if (!hasMongoConfig()) {
    const key = edgeKey(readerId, authorHandle);
    if (following) localFollows.add(key); else localFollows.delete(key);
    return getFollowState(readerId, authorHandle);
  }
  const database = await getBlogDatabase();
  const collection = database.collection<FollowEdge>('follows');
  await collection.createIndex({ readerId: 1, authorHandle: 1 }, { unique: true });
  if (following) {
    await collection.updateOne({ readerId, authorHandle }, { $setOnInsert: { readerId, authorHandle, createdAt: new Date().toISOString() } }, { upsert: true });
  } else {
    await collection.deleteOne({ readerId, authorHandle });
  }
  return getFollowState(readerId, authorHandle);
}