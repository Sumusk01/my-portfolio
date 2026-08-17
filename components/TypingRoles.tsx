'use client';

import { useEffect, useMemo, useState } from 'react';

interface TypingRolesProps {
  roles: string[];
}

export function TypingRoles({ roles }: TypingRolesProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(roles[0]);
      return;
    }

    const role = roles[index];
    const interval = window.setInterval(() => {
      setDisplayed((current) => {
        if (!deleting) {
          if (current.length === role.length) {
            window.clearInterval(interval);
            window.setTimeout(() => setDeleting(true), 1200);
            return current;
          }
          return role.slice(0, current.length + 1);
        }

        if (current.length === 0) {
          setDeleting(false);
          setIndex((currentIndex) => (currentIndex + 1) % roles.length);
          return '';
        }

        return role.slice(0, current.length - 1);
      });
    }, deleting ? 80 : 120);

    return () => window.clearInterval(interval);
  }, [deleting, index, prefersReducedMotion, roles]);

  return (
    <span className="inline-flex items-center gap-2 font-semibold text-accent">
      <span>{displayed}</span>
      <span className="h-5 w-1 rounded bg-accent animate-pulse" aria-hidden="true" />
    </span>
  );
}
