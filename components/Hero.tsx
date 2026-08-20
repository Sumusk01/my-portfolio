'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { hero } from '@/data/hero';
import { socialLinks } from '@/data/links';
import { TerminalWindow } from './TerminalWindow';
import { TypingRoles } from './TypingRoles';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-6 lg:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-7">
          <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">
            // hi, i'm sumit kumar
          </p>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              I build full-stack web applications with a deliberate AI-augmented development workflow.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-300"> 
              {hero.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <TypingRoles roles={hero.roles} />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {hero.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  cta.variant === 'solid'
                    ? 'bg-accent text-white shadow-glow hover:bg-violet-500'
                    : 'border border-white/10 bg-white/5 text-slate-100 hover:border-white/20'
                }`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {Object.entries(socialLinks).map(([key, href]) => {
              const Icon = iconMap[key as keyof typeof iconMap];
              return (
                <Link
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface2 text-slate-200 transition hover:border-white/20 hover:text-white"
                  aria-label={key}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex max-w-lg flex-1 flex-col gap-6">
          <TerminalWindow />
          <div className="rounded-3xl border border-white/10 bg-surface2/95 p-6 text-slate-300 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Quick note</p>
            <p className="mt-4 text-slate-200">
              I typically respond within 24–48 hours and I’m open to full-time roles, internships, and collaborative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
