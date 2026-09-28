import { BlogHomeClient } from '@/features/publication/components/BlogHomeClient';

export default function BlogHome() {
  const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'http://localhost:3000';
  return <BlogHomeClient portfolioUrl={portfolioUrl} />;
}