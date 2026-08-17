import { Briefcase, Cpu, Database, Layers, Sparkles } from 'lucide-react';
import { skills } from '@/data/skills';

const techIcons = [
  { label: 'Java', icon: Cpu },
  { label: 'React.js', icon: Layers },
  { label: 'Spring Boot', icon: Database },
  { label: 'Next.js', icon: Sparkles },
  { label: 'PostgreSQL', icon: Database },
];

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">// about</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Project-driven software engineering with an honest fresher trajectory.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Software Engineer with 1+ years of hands-on experience designing, developing, and deploying scalable web applications across the complete SDLC. Well-versed in Agile methodologies, with strong proficiency across frontend and backend technologies including Java, Spring Boot, React.js, and Node.js. Actively leverages AI-powered development workflows — context engineering, effective prompt design, and task orchestration — to accelerate development and improve code quality.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-surface2/95 p-6 shadow-glow">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: '2026', value: 'Graduating (B.Tech CSE)' },
                { label: '2+', value: 'Major projects shipped' },
                { label: '6', value: 'Certifications completed' },
                { label: '1+ yr', value: 'Hands-on build experience' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-[#111827]/85 p-4">
                  <p className="text-sm font-mono uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-[#04060c]/90 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Personal note</p>
              <p className="mt-3 text-slate-200">
                I like to debug with a checklist mindset, pairing AI suggestions with manual reasoning instead of trusting an answer blindly.
              </p>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-surface2/95 p-6 shadow-glow">
            <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">// tech snapshot</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {techIcons.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-[#02040a]/80 p-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-accent">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-slate-400">Core focus</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
