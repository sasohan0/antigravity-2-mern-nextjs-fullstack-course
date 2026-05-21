# Google Antigravity 2.0 MERN & Next.js Full-Stack Course

A complete **course website repo** for teaching junior MERN developers how to become AI-powered full-stack builders using **Google Antigravity 2.0**, **NotebookLM**, **Figma**, **React**, **Node.js**, **Express**, **MongoDB**, **testing**, **deployment**, and an advanced **Next.js + TypeScript production track**.

This repository is designed to be published as a GitHub Pages/Docusaurus course site and used as a structured bootcamp curriculum.

## SEO description

**Google Antigravity 2.0 MERN and Next.js Full-Stack Course** — a complete AI-assisted development curriculum with MDX lessons, embedded YouTube videos, dynamic quizzes, Figma-to-code workflow, reusable `SKILL.md` templates, MERN capstone assignment, testing, deployment, mentor rubrics, and career showcase assets.

## Recommended repository name

```txt
antigravity-2-mern-nextjs-fullstack-course
```

## Recommended GitHub description

```txt
Complete Google Antigravity 2.0 MERN + Next.js full-stack course with MDX lessons, quizzes, Figma-to-code, testing, deployment, capstone, and SKILL.md templates.
```

## Recommended GitHub topics

```txt
google-antigravity
antigravity
mern-stack
nextjs
typescript
react
nodejs
expressjs
mongodb
figma-to-code
ai-assisted-development
notebooklm
fullstack-course
developer-bootcamp
skill-md
testing
deployment
docusaurus
```

## What is included

```txt
docs/
  course/       Complete modules 0–10 and bonus Module 5.5
  final/        Category-based real-world MERN capstone
  advanced/     Reusable SKILL.md library and Next.js production track
  support/      Troubleshooting, GitHub workflow, quality gate, assessment, career showcase
  mentor/       Instructor/Mentor delivery guide

src/
  components/   Dynamic Quiz, Checklist and YouTube embed components
  data/         Quiz question bank

templates/
  skills/       Reusable SKILL.md templates
  submission/   Student submission templates
  rubrics/      Evaluation rubrics
  prompts/      Safe Antigravity prompt packs
```

## Course modules

1. Module 0: Setup & Prerequisite Check
2. Introduction
3. Utilize NotebookLM
4. Module 1: Antigravity 2.0 Setup & Safe Workflow
5. Module 2: Spec-First Development
6. Module 3: Codebase & Architecture Thinking
7. Module 4: `SKILL.md` Mastery
8. Module 5: Figma-to-Code Workflow
9. Bonus Module 5.5: Website UI Replication Lab
10. Module 6: Frontend Implementation
11. Module 7: Backend Implementation
12. Module 8: Full-Stack Integration
13. Module 9: Testing, Browser Verification & QA
14. Module 10: Deployment & Portfolio Packaging
15. Final Assignment
16. Bonus: Reusable `SKILL.md` Library
17. Advanced: Next.js + TypeScript Production Track
18. Support Packs and Mentor Delivery Guide

## Run locally

```bash
npm install
npm run start
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
npm run serve
```

## Deploy to GitHub Pages

1. Create a public GitHub repo named:

```txt
antigravity-2-mern-nextjs-fullstack-course
```

2. Replace `sasohan0` inside `docusaurus.config.ts`.
3. Push to the `main` branch.
4. Go to **Settings → Pages**.
5. Choose **GitHub Actions** as the publishing source.
6. The included workflow deploys the Docusaurus site.

## Dynamic quizzes

Quiz questions live in:

```txt
src/data/quizzes.ts
```

Pages use:

```mdx
<Quiz moduleId="module1" />
```

## Embedded YouTube videos

Pages use:

```mdx
<YouTubeEmbed videoId="VIDEO_ID" title="Video title" />
```

## Reusable checklists

Pages use:

```mdx
<Checklist title="Submission checklist" items={['Task one', 'Task two']} />
```

## Templates

Use the `templates/` folder for:

- reusable Antigravity `SKILL.md` files
- student submission formats
- final assignment rubric
- safe Antigravity prompt patterns

## Suggested use

For a 7-day Eid sprint, use the course as a launch sprint. For full mastery, run it as a 3–4 week guided bootcamp with module submissions, mentor feedback, and final capstone review.

## License

Choose and update the license before publishing publicly. Suggested options:

- MIT for open-source repo structure
- CC BY or CC BY-NC for course content
- Private/internal license if used only inside an organization
