import { notFound } from 'next/navigation';
import { CaseStudyPage } from '@/features/portfolio/components/CaseStudyPage';
import { getProject, projects } from '@/features/portfolio/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <CaseStudyPage project={project} />;
}