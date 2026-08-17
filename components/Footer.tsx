import { socialLinks } from '@/data/links';
import { Github, Linkedin, Mail } from 'lucide-react';

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface2 px-5 py-10 text-sm text-slate-400 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js, Tailwind CSS, and a terminal-inspired interface.</p>
        <div className="flex items-center gap-3">
          {Object.entries(socialLinks).map(([key, href]) => {
            const Icon = icons[key as keyof typeof icons];
            return (
              <a
                key={key}
                href={href}
                aria-label={key}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-surface hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
