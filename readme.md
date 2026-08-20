# Sumit Kumar — Developer Portfolio

A production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. The design has a terminal / IDE-inspired visual identity, with a responsive, accessible layout and case-study routes for featured projects.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in your browser.

## Content guide

- `app/page.tsx` is the homepage.
- `data/hero.ts`, `data/skills.ts`, `data/projects.ts`, `data/timeline.ts`, and `data/articles.ts` contain editable content.
- `components/` holds reusable sections and layout pieces.
- `app/projects/[slug]/page.tsx` generates project case-study pages from `data/projects.ts`.
- `public/resume.pdf` is the resume file linked from the hero CTA.
- `public/projects/` contains project cover assets and placeholder graphics.

## Deploy

Deploy to Vercel with the official GitHub integration or CLI:

```bash
npx vercel --prod
```

If you use GitHub integration, push to `main` and Vercel can auto-deploy on every commit.

## What still needs personal input

- Replace `https://github.com/Sumusk01` in `data/links.ts`, `data/projects.ts`, and `components/OpenSourcePanel.tsx` with your GitHub username.
- Add real project repository URLs and screenshot assets.
- Replace the placeholder `public/resume.pdf` with your actual resume.
- Add a profile photo if desired.
- Connect the contact form backend in `app/api/contact/route.ts`.
- Update the About section personal note and 2025 timeline dates if needed.
