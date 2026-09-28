import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const globalForMongo = globalThis as typeof globalThis & { mongoPromise?: Promise<MongoClient> };

export function hasMongoConfig() {
  return Boolean(uri);
}

export function getMongoClient() {
  if (!uri) throw new Error('MONGODB_URI is not configured');
  if (!globalForMongo.mongoPromise) {
    const client = new MongoClient(uri, {
      maxPoolSize: 5,
      maxIdleTimeMS: 20000,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    });
    globalForMongo.mongoPromise = client.connect();
  }
  return globalForMongo.mongoPromise;
}

export async function getBlogDatabase() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB || 'field_notes');
}