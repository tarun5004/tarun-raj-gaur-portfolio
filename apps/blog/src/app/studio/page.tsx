import Link from 'next/link';

export default function StudioPage() {
  return <main className="blog-page"><div className="blog-shell"><header><Link href="/" className="brand">Field Notes <span>/ Studio</span></Link><nav><Link href="/">Publication</Link><Link href="/" aria-label="Portfolio">Portfolio {'->'}</Link></nav></header><section className="studio-bridge"><p>Editorial Studio</p><h1>Create, edit, publish.</h1><p>The production editor is intentionally a separate deployment boundary. Use the portfolio preview Studio while the server-side persistence layer is being added.</p><a href={process.env.NEXT_PUBLIC_PORTFOLIO_URL ? `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/studio` : 'http://localhost:3000/studio'}>Open working Studio {'->'}</a></section></div></main>;
}