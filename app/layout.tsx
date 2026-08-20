import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sumit-space-xi.vercel.app'),
  title: 'Sumit Kumar — Software Engineer & Full-Stack Developer',
  description:
    'Portfolio of Sumit Kumar, a full-stack software engineer specializing in Java, Spring Boot, React, and Next.js. B.Tech CSE graduate building AI-augmented, production-quality web applications.',
  keywords: [
    'Sumit Kumar',
    'software engineer portfolio',
    'full-stack developer portfolio',
    'Java Spring Boot developer',
    'React Next.js developer',
    'fresher software engineer India',
  ],
  openGraph: {
    title: 'Sumit Kumar — Software Engineer',
    description: 'Full-stack developer portfolio — projects, skills, and case studies.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
