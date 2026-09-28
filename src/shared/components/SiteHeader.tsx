import Link from 'next/link';

type SiteHeaderProps = {
  publication?: boolean;
};

export function SiteHeader({ publication = false }: SiteHeaderProps) {
  const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || '/';
  const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL || '/notes';

  if (publication) {
    return (
      <header className="publication-header site-header">
        <Link className="wordmark" href="/notes">
          Field Notes <span>/ Tarun Raj Gaur</span>
        </Link>
        <nav aria-label="Publication navigation">
          <Link href="/notes">Latest</Link>
          <Link href="/notes#archive">Archive</Link>
          <Link href="/studio">Studio</Link>
          <Link href={portfolioUrl}>View portfolio <span aria-hidden="true">{'->'}</span></Link>
        </nav>
      </header>
    );
  }

  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        TRG <span>/ systems &amp; notes</span>
      </Link>
      <nav aria-label="Portfolio navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href={blogUrl}>Read notes <span aria-hidden="true">{'->'}</span></Link>
        <Link href="/studio">Studio</Link>
        <a href="/TARUN_cv%20(1).pdf" download>CV <span aria-hidden="true">↓</span></a>
      </nav>
    </header>
  );
}