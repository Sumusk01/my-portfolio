type ArchitectureDiagramProps = {
    title?: string;
    stages: string[];
};

export function ArchitectureDiagram({ title, stages }: ArchitectureDiagramProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-[#02040a]/90 p-6">
            {title && (
                <p className="mb-6 text-sm font-mono uppercase tracking-[0.35em] text-slate-500">{title}</p>
            )}
            <div className="flex flex-col items-center gap-2">
                {stages.map((stage, i) => (
                    <div key={stage} className="flex w-full flex-col items-center gap-2">
                        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-center text-sm font-medium text-slate-100">
                            {stage}
                        </div>
                        {i < stages.length - 1 && (
                            <span className="text-lg text-accent" aria-hidden="true">
                                ↓
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}