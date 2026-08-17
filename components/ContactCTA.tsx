'use client';

import { useState } from 'react';

export function ContactCTA() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-surface2/95 p-6 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="section-heading text-sm uppercase tracking-[0.35em] text-slate-400">Interested in working together?</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s connect — I'm open to full-time roles, internships, and collaborative projects.</h2>
            <p className="text-sm leading-7 text-slate-300">
              Email me at{' '}
              <a href="mailto:sumitkumar.work@outlook.com" className="font-medium text-accent hover:text-violet-300">
                sumitkumar.work@outlook.com
              </a>{' '}
              and I typically respond within 24–48 hours.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-[#02040a]/90 p-6">
            <label className="block text-sm text-slate-300">
              Name
              <input
                required
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input
                required
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Message
              <textarea
                required
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'success' ? (
              <p className="text-sm text-emerald-400">Message queued successfully. A backend will be connected soon.</p>
            ) : null}
            {status === 'error' ? (
              <p className="text-sm text-rose-400">Unable to send right now. Please try again later.</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
