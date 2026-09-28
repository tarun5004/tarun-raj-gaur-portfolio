export type StudioStatus = 'draft' | 'published' | 'archived';

export type StudioPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  author: string;
  body: string;
  assetUrl: string;
  assetType: 'image' | 'pdf' | '';
  status: StudioStatus;
  token: string;
  createdAt: string;
  updatedAt: string;
};

export const studioStorageKey = 'trg-field-notes-studio-v1';