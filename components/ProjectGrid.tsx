import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export function ProjectGrid() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400"># projects</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Real projects, honest outcomes.</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
