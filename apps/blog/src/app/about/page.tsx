import Link from 'next/link';
import { authors } from '@/features/publication/data/content';
import { Avatar } from '@/features/publication/components/Avatar';

export default function AboutPage() {
  return <main className="about-publication"><div className="about-shell"><header className="archive-header"><Link href="/" className="brand">Field Notes</Link><Link href="/">Home →</Link></header><section><p>About the publication</p><h1>A useful shelf for complicated work.</h1><span>Field Notes is an open publication for engineering thoughts, project lessons, photographs, diagrams, and the decisions that do not fit neatly into a changelog.</span></section><div className="about-authors"><p>People who write here</p>{authors.map((author) => <Link href={`/profile/${author.handle}`} key={author.handle}><Avatar author={author} size="medium" /><span><strong>{author.name}</strong><small>{author.role}</small></span></Link>)}</div></div></main>;
}