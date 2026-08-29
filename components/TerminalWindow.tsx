'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';

type HistoryEntry = {
  command: string;
  output: string[];
};

const INITIAL_HISTORY: HistoryEntry[] = [
  { command: 'whoami', output: ['software engineer, fresher, ships fast'] },
  { command: 'cat skills.json | grep -c true', output: ['15+'] },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function runCommand(raw: string): string[] {
  const command = raw.trim().toLowerCase();

  switch (command) {
    case 'help':
      return [
        'available commands:',
        '  help ->     show this list',
        '  whoami ->   who am i',
        '  skills ->   core tech stack',
        '  projects -> jump to featured projects',
        '  contact -> how to reach me',
        '  resume -> download resume',
        '  clear ->   clear the terminal',
      ];
    case 'whoami':
      return ['software engineer, fresher, ships fast'];
    case 'skills':
      return ['Java · Spring Boot · React.js · Next.js · PostgreSQL'];
    case 'projects':
      scrollToSection('projects');
      return ['CampusConnect - Student Information Management System', 'DrishtiAI — Image Dehazing System', 'jumping to #projects...'];
    case 'contact':
      scrollToSection('contact');
      return ['sumitkumar.work@outlook.com', 'jumping to #contact...'];
    case 'resume': {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Sumit-Kumar-Resume.pdf';
      link.click();
      return ['downloading resume.pdf...'];
    }
    case 'sudo':
      return ['sumit is already root here. nice try though.'];
    default:
      return [`command not found: ${command} — type 'help' for options`];
  }
}

export function TerminalWindow() {
  const [history, setHistory] = useState<HistoryEntry[]>(INITIAL_HISTORY);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: runCommand(trimmed) }]);
    setInput('');
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#02040a]/95 p-5 text-sm text-slate-200 shadow-glow">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f56]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#27c93f]" />
      </div>

      <div ref={scrollRef} className="max-h-72 space-y-3 overflow-y-auto pr-1 font-mono leading-6">
        {history.map((entry, i) => (
          <div key={i}>
            <div className="text-slate-400">sumit@dev:~$ {entry.command}</div>
            {entry.output.map((line, j) => (
              <div key={j} className="text-slate-100">
                &gt; {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-3 flex items-center gap-2 rounded-lg border border-white/15 bg-black/20 px-3 py-2 font-mono transition focus-within:border-accent"
      >
        <span className="text-slate-400">sumit@dev:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal command input — type help to see available commands"
          placeholder="type 'help'"
          className="flex-1 appearance-none border-0 bg-transparent text-slate-100 outline-none ring-0 placeholder:text-slate-600 focus:border-0 focus:outline-none focus:ring-0"
        />
      </form>
    </div>
  );
}