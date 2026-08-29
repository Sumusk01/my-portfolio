import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Sumit Kumar`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.outcome,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const problemContext =
    project.slug === 'student-information-management-system'
      ? 'Built for academic or administrative teams who need a centralized, reliable way to manage student records without manual spreadsheet workflows.'
      : 'Developed as a final-year research project to evaluate image dehazing techniques for improved visibility in foggy scenes and assess downstream object detection performance.';

  const constraints =
    project.slug === 'student-information-management-system'
      ? 'Chose a Spring Boot + PostgreSQL stack for strong data integrity and structured APIs, while keeping the frontend responsive and easy to maintain. Focused on validation, record history, and reliable CRUD flows rather than adding unnecessary bells and whistles.'
      : 'Balanced academic evaluation with practical implementation: prioritized comparative model quality and dataset results over deploying a polished demo app. The key tradeoff was showing that dehazing can improve visual clarity but may impact YOLOv8 detection accuracy in some foggy scenes.';

  const diagramStages =
    project.slug === 'student-information-management-system'
      ? ['React Frontend', 'Spring Boot REST API (validation + exception handling)', 'PostgreSQL']
      : ['Hazy Input Image', 'Dehazing Model (DCP / AOD-Net / FFA-Net / DehazeFormer)', 'Enhanced Output', 'YOLOv8 Object Detection', 'Evaluation'];

  return (
    <CaseStudyLayout project={project}>
      <section className="space-y-10">
        <div className="rounded-3xl border border-white/10 bg-surface2/95 p-8 shadow-glow">
          <h2 className="text-2xl font-semibold text-white">Problem & user context</h2>
          <p className="mt-4 text-slate-300 leading-8">{problemContext}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-surface2/95 p-8 shadow-glow">
            <h3 className="text-xl font-semibold text-white">Constraints & tradeoffs</h3>
            <p className="mt-4 text-slate-300 leading-8">{constraints}</p>
          </div>
          <ArchitectureDiagram title="// architecture / data flow" stages={diagramStages} />
        </div>
        <div className="rounded-3xl border border-white/10 bg-surface2/95 p-8 shadow-glow">
          <h3 className="text-xl font-semibold text-white">Screenshots & UI states</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="relative h-60 overflow-hidden rounded-3xl bg-[#0b1220]">
              <Image src={project.image} alt={`${project.title} project screenshot`} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
            <div className="rounded-3xl border border-dashed border-white/10 bg-[#02040a]/80 p-6 text-slate-300">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Gallery will be added soon</p>
              <p className="mt-4 text-sm leading-7">Add additional screenshots or mockups here once available.</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-surface2/95 p-8 shadow-glow">
          <h3 className="text-xl font-semibold text-white">Results, metrics, lessons learned</h3>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>Implemented a production-ready CRUD backend with global validation and health-check endpoints.</li>
            <li>Used responsive React UI patterns for consistent form flows and record detail screens.</li>
            <li>Learned that AI-augmented workflows are strongest when paired with careful architecture decisions and manual review.</li>
          </ul>
        </div>
      </section>
    </CaseStudyLayout>
  );
}