import type { Author } from '@/features/publication/data/content';

export function Avatar({ author, size = 'medium' }: { author: Author; size?: 'small' | 'medium' | 'large' }) {
  return <span className={`avatar avatar-${size}`} style={{ backgroundImage: `url(${author.avatarUrl})`, backgroundColor: author.accent }} role="img" aria-label={`${author.name} profile photo`} />;
}