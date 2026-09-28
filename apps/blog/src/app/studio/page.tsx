import Link from 'next/link';
import { StudioClient } from '@/features/editorial/StudioClient';

export default function StudioPage() {
  const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'http://localhost:3000';
  return <main className="blog-page"><div className="blog-shell"><header><Link href="/" className="brand">Field Notes <span>/ Studio</span></Link><nav><Link href="/">Publication</Link><a href={portfolioUrl}>Portfolio {'->'}</a></nav></header><section className="studio-bridge"><p>Editorial Studio</p><h1>Create, edit, publish.</h1><p>This browser-local Studio supports note CRUD, edit tokens, and Cloudinary image/PDF uploads. It is a prototype until server-side persistence and token hashing are added.</p><StudioClient /></section></div></main>;
}