import Link from 'next/link';
import { featuredProjects, projects } from '@/features/portfolio/data/projects';
import { posts } from '@/features/publication/data/posts';
import { Footer } from '@/shared/components/Footer';
import { SiteHeader } from '@/shared/components/SiteHeader';
import { SystemTrace } from './SystemTrace';

export function PortfolioHome() {
  return (
    <main className="portfolio-page">
      <div className="page-shell">
        <SiteHeader />
        <section className="portfolio-hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tarun Raj Gaur / full-stack AI systems engineer</p>
            <h1>I build the systems that make ambitious software hold together.</h1>
            <p className="hero-dek">I design and ship secure AI platforms, backend services, and developer tools, then investigate the failure modes that appear after the demo.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/work">Explore the work <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/notes">Read the field notes <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="hero-diagram" aria-label="A diagram showing requests moving through policy, systems, and evidence" role="img">
            <div className="diagram-label">A small map of my attention</div>
            <div className="diagram-line line-one"><span>request</span><i /></div>
            <div className="diagram-line line-two"><span>policy</span><i /></div>
            <div className="diagram-line line-three"><span>system</span><i /></div>
            <div className="diagram-line line-four"><span>evidence</span><i /></div>
            <div className="diagram-core">TRG<span>01</span></div>
            <p>secure by design<br />curious by default</p>
          </div>
        </section>

        <section className="signal-strip" aria-label="Current focus">
          <span>Currently thinking about</span>
          <strong>GenAI workflows</strong><span className="strip-dot">/</span>
          <strong>RAG + MCP</strong><span className="strip-dot">/</span>
          <strong>deployment systems</strong><span className="strip-dot">/</span>
          <strong>developer tools</strong>
        </section>

        <section className="recruiter-proof" aria-label="Recruiter snapshot">
          <div><p className="eyebrow">Recruiter snapshot</p><h2>Enough signal to decide where to look next.</h2></div>
          <div className="proof-grid"><div><strong>06</strong><span>public projects</span></div><div><strong>02</strong><span>flagship AI systems</span></div><div><strong>01</strong><span>clear working style</span></div><p>Full-stack delivery across Next.js, Node, MongoDB, Redis, Docker, AWS, Kubernetes, and AI platform design.</p></div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">Selected systems</p><h2>Work with a point of view.</h2></div>
            <Link className="text-link" href="/work">See all six projects <span aria-hidden="true">→</span></Link>
          </div>
          <div className="featured-projects">
            {featuredProjects.map((project, index) => (
              <article className={`feature-project project-${project.accent}`} key={project.slug}>
                <div className="project-topline"><span>0{index + 1}</span><span>{project.status}</span></div>
                <Link className="project-body" href={project.href}>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </Link>
                <div className="project-proof"><span>Proof</span>{project.proof}</div>
                <div className="project-actions"><Link href={project.href}>Case study <span aria-hidden="true">↗</span></Link>{project.liveDemo ? <a href={project.liveDemo} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a> : null}</div>
              </article>
            ))}
          </div>
          <div className="project-index">
            {projects.filter((project) => !project.featured).map((project) => (
              <Link href={project.href} className="index-row" key={project.slug}>
                <span className="index-name">{project.name}</span><span>{project.eyebrow}</span><span>{project.status}</span><span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <SystemTrace />

        <section className="writing-bridge section-grid">
          <div><p className="eyebrow">Field notes</p><h2>The blog is where the decisions get unpacked.</h2><p className="bridge-copy">A separate publication for architecture notes, failure analysis, and the questions that survive the code review.</p><Link className="button button-coral" href="/notes">Enter Field Notes <span aria-hidden="true">↗</span></Link></div>
          <div className="mini-posts">
            {posts.slice(0, 3).map((post) => <Link href={`/notes/${post.slug}`} className="mini-post" key={post.slug}><span>{post.number} / {post.topic}</span><strong>{post.title}</strong><small>{post.date} · {post.readingTime}</small></Link>)}
          </div>
        </section>

        <section className="capabilities-section">
          <div><p className="eyebrow">The toolkit</p><h2>Three ways I tend to be useful.</h2></div>
          <div className="capability-grid">
            <div><span>01</span><h3>Build AI workflows</h3><p>Prompt engineering, RAG, MCP, provider routing, evaluation, and operational controls.</p></div>
            <div><span>02</span><h3>Ship services</h3><p>React, Next.js, Node, Express, MongoDB, Redis, queues, and clean boundaries.</p></div>
            <div><span>03</span><h3>Operate systems</h3><p>Docker, Kubernetes, AWS, CI/CD, failure analysis, and the work after launch.</p></div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}