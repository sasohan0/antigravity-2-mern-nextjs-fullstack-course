# Repository Architecture

## Platform choice

This repo uses Docusaurus because the course is documentation-first but needs React-powered interactive learning objects. MDX pages allow embedded components such as quizzes, video embeds and checklists.

## Course content

- `docs/course/`: main modules
- `docs/final/`: final capstone
- `docs/advanced/`: reusable skills and Next.js track
- `docs/support/`: troubleshooting, GitHub workflow, quality gate, assessment, career showcase
- `docs/mentor/`: instructor delivery guide

## Interactive components

- `YouTubeEmbed.tsx`: responsive YouTube embed
- `Quiz.tsx`: dynamic quiz UI
- `Checklist.tsx`: checkable completion list

## Data

- `src/data/quizzes.ts`: all quiz questions

## Templates

- `templates/skills/`: reusable SKILL.md templates
- `templates/submission/`: student submissions
- `templates/rubrics/`: scoring
- `templates/prompts/`: reusable prompts

## Deployment

The GitHub Actions workflow builds the Docusaurus site and deploys it to GitHub Pages.
