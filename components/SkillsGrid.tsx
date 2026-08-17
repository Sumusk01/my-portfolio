import { skills } from '@/data/skills';
import { Code, Monitor, Server, Settings2 } from 'lucide-react';

const categoryIcons = {
  languages: Code,
  frontend: Monitor,
  backend: Server,
  tools: Settings2,
};

export function SkillsGrid() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400"># skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A concise toolkit for full-stack delivery.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => {
            const Icon = categoryIcons[category];
            return (
              <div key={category} className="rounded-3xl border border-white/10 bg-surface2/95 p-6 shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-accent">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-sm uppercase tracking-[0.35em] text-slate-400">// {category}</p>
                    <p className="mt-1 text-sm text-slate-200">{skills[category].length} items</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-2">
                  {skills[category].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-[#02040a]/90 px-3 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
