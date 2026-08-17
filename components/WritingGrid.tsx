import { articles } from '@/data/articles';

export function WritingGrid() {
  return (
    <section id="writing" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">// writing</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Thoughtful writing on development, coming soon.</h2>
        </div>
        {articles.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-surface2/95 p-10 text-slate-300">
            <p>No articles yet — this section is ready once a blog or technical notes are added.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.href} className="rounded-3xl border border-white/10 bg-surface2/95 p-6 shadow-glow">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Article</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{article.description}</p>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-accent"
                >
                  Read more →
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
