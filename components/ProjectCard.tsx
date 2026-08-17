'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Star, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [starError, setStarError] = useState(false);

  const repoParts = useMemo(() => {
    try {
      const url = new URL(project.github);
      const [owner, repo] = url.pathname.slice(1).split('/');
      return { owner, repo };
    } catch {
      return null;
    }
  }, [project.github]);

  useEffect(() => {
    if (!repoParts) return;

    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repoParts.owner}/${repoParts.repo}`);
        if (!response.ok) {
          setStarError(true);
          return;
        }
        const data = await response.json();
        setStars(data.stargazers_count ?? null);
      } catch {
        setStarError(true);
      }
    };

    fetchStars();
  }, [repoParts]);

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-surface2/95 transition-transform duration-200 hover:-translate-y-1 hover:shadow-glow focus-within:-translate-y-1">
      <div className="relative h-64 bg-[#0b1220]">
        <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-mono uppercase tracking-[0.35em] text-slate-400">Featured project</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
          </div>
          {stars !== null ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <Star size={14} className="text-accent" />
              {stars}
            </div>
          ) : null}
        </div>
        <p className="text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20"
          >
            Case study
            <ExternalLink size={14} />
          </Link>
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-slate-200 transition hover:border-white/20"
            >
              <Github size={14} /> Github
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
