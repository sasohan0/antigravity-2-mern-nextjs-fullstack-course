# GitHub Push Guide

## 1. Create GitHub repo

Repository name:

```txt
antigravity-2-mern-nextjs-fullstack-course
```

Description:

```txt
Complete Google Antigravity 2.0 MERN + Next.js full-stack course with MDX lessons, quizzes, Figma-to-code, testing, deployment, capstone, and SKILL.md templates.
```

Topics: see `TOPICS.md`.

## 2. Update config

In `docusaurus.config.ts`, replace:

```txt
sasohan0
```

with your GitHub username.

## 3. Push

```bash
git init
git add .
git commit -m "docs: publish antigravity mern nextjs fullstack course"
git branch -M main
git remote add origin https://github.com/sasohan0/antigravity-2-mern-nextjs-fullstack-course.git
git push -u origin main
```

## 4. Enable GitHub Pages

Go to:

```txt
Settings → Pages → Source → GitHub Actions
```

## 5. Verify

After the workflow completes, open:

```txt
https://sasohan0.github.io/antigravity-2-mern-nextjs-fullstack-course/
```
