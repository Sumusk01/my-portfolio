import { timeline } from '@/data/timeline';
import { CalendarDays, GraduationCap, Sparkles, ServerCog } from 'lucide-react';

const iconMap = {
  education: GraduationCap,
  project: Sparkles,
  certification: ServerCog,
};

export function ExperienceTimeline() {
  return (
    <section id="journey" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">// journey</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Growth timeline for the early career phase.</h2>
        </div>
        <div className="space-y-8">
          {timeline.map((entry) => {
            const Icon = iconMap[entry.type];
            return (
              <div key={`${entry.title}-${entry.date}`} className="flex gap-5 rounded-3xl border border-white/10 bg-surface2/95 p-6 shadow-glow">
                <div className="mt-1 rounded-2xl bg-[#111827]/95 p-3 text-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="font-mono uppercase tracking-[0.35em]">{entry.date}</span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <CalendarDays size={14} /> {entry.org}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{entry.title}</h3>
                  {entry.description ? <p className="mt-3 text-sm leading-7 text-slate-300">{entry.description}</p> : null}
                  {entry.tech ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tech.map((item) => (
                        <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
