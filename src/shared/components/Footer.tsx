import Link from 'next/link';

export function Footer({ publication = false }: { publication?: boolean }) {
  return (
    <footer className={publication ? 'footer publication-footer' : 'footer'}>
      <div>
        <span className="footer-kicker">{publication ? 'End of issue' : 'Open to good problems'}</span>
        <p>{publication ? 'The work lives in the portfolio. The thinking lives here.' : 'Full-stack, AI systems, and the engineering between them.'}</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/tarun5004" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/tarun-raj-bab024381/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hello@tarunrajgaur.dev">Email</a>
        <Link href={publication ? '/' : '/notes'}>{publication ? 'Portfolio ->' : 'Read notes ->'}</Link>
      </div>
    </footer>
  );
}