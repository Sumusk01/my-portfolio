import { socialLinks } from '@/data/links';

export function OpenSourcePanel() {
  const githubUsername = 'your-username';

  return (
    <section id="open-source" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-surface2/95 p-6 shadow-glow">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">// open source</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Public contribution work is coming soon.</h2>
          </div>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20"
          >
            View GitHub Profile →
          </a>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-[#02040a]/90 p-6">
            <img
              src={`https://ghchart.rshah.org/${githubUsername}`}
              alt="GitHub contribution graph"
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#02040a]/90 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Notable contributions</p>
            <div className="mt-4 rounded-3xl border border-dashed border-white/10 bg-surface px-5 py-8 text-sm text-slate-300">
              <p>First open-source contributions coming soon — check back or see the GitHub profile directly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
