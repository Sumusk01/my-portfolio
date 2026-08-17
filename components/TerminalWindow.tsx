'use client';

export function TerminalWindow() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#02040a]/95 p-5 text-sm text-slate-200 shadow-glow">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f56]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-3.5 w-3.5 rounded-full bg-[#27c93f]" />
      </div>
      <div className="space-y-3 font-mono leading-6">
        <div className="text-slate-400">sumit@dev:~$ whoami</div>
        <div className="text-slate-100">&gt; full-stack engineer, fresher, ships fast</div>
        <div className="text-slate-400">sumit@dev:~$ cat skills.json | grep -c true</div>
        <div className="text-slate-100">&gt; 15+</div>
      </div>
    </div>
  );
}
