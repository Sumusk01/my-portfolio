import Link from 'next/link';
import { ArrowLeft, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

interface CaseStudyLayoutProps {
  project: Project;
  children: React.ReactNode;
}

export function CaseStudyLayout({ project, children }: CaseStudyLayoutProps) {
  return (
    <main className="px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-white"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <div className="space-y-3 rounded-3xl border border-white/10 bg-surface2/95 p-8 shadow-glow">
          <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">Case study</p>
          <h1 className="text-4xl font-semibold text-white">{project.title}</h1>
          <p className="text-slate-300">{project.outcome}</p>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
                {item}
              </span>
            ))}
          </div>
                    {project.repoReady ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20"
            >
              <Github size={16} /> View repository
            </Link>
          ) : (
            <span
              aria-disabled="true"
              title="Repository not public yet"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-500"
            >
              <Github size={16} /> View repository
            </span>
          )}
        </div>
        {children}
      </div>
    </main>
  );
}
