export type StudioStatus = 'draft' | 'published' | 'archived';

export type StudioPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  author: string;
  body: string;
  status: StudioStatus;
  token: string;
  createdAt: string;
  updatedAt: string;
};

export const studioStorageKey = 'trg-field-notes-studio-v1';