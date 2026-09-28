import Link from 'next/link';
import { projects } from '@/features/portfolio/data/projects';
import { Footer } from '@/shared/components/Footer';
import { SiteHeader } from '@/shared/components/SiteHeader';

export function WorkIndex() {
  return <main className="portfolio-page"><div className="page-shell"><SiteHeader /><section className="work-intro"><p className="eyebrow">Six systems / one evolving practice</p><h1>Work is where the opinions become concrete.</h1><p>Every project starts with a problem worth making specific. The stack follows the boundary, not the other way around.</p></section><section className="full-project-list">{projects.map((project, index) => <Link className={`full-project-row project-${project.accent}`} href={project.href} key={project.slug}><span className="full-project-number">0{index + 1}</span><div><p>{project.eyebrow}</p><h2>{project.name}</h2><span>{project.tags.join(' / ')}</span></div><div className="full-project-description"><p>{project.description}</p><small>{project.status}</small></div><span className="project-arrow" aria-hidden="true">↗</span></Link>)}</section><Footer /></div></main>;
}