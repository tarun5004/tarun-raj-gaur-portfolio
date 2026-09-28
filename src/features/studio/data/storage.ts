import type { StudioPost } from './studioTypes';
import { studioStorageKey } from './studioTypes';

export function readStudioPosts(): StudioPost[] {
  if (typeof window === 'undefined') return [];
  try {
    const value = window.localStorage.getItem(studioStorageKey);
    return value ? (JSON.parse(value) as StudioPost[]) : [];
  } catch {
    return [];
  }
}

export function writeStudioPosts(posts: StudioPost[]) {
  window.localStorage.setItem(studioStorageKey, JSON.stringify(posts));
}

export function createSlug(title: string) {
  return title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 64) || 'untitled-note';
}