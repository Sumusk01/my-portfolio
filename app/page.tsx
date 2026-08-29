import { About } from '@/components/About';
import { ContactCTA } from '@/components/ContactCTA';
import { Hero } from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { OpenSourcePanel } from '@/components/OpenSourcePanel'; // TODO: re-enable once GitHub contributions are public
import { ProjectGrid } from '@/components/ProjectGrid';
import { SkillsGrid } from '@/components/SkillsGrid';
// import { WritingGrid } from '@/components/WritingGrid'; // TODO: re-enable once blog/articles are ready
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface text-slate-50">
      <Nav />
      <main>
        <Hero />
        <About />
        <SkillsGrid />
        <ProjectGrid />
        {<OpenSourcePanel />}
        {/* <WritingGrid /> */}
        <ExperienceTimeline />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}