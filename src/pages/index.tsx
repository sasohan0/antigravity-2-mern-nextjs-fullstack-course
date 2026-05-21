import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main>
      <section className="heroBanner">
        <h1>Google Antigravity 2.0 MERN & Next.js Full-Stack Course</h1>
        <p>A complete GitHub course website for AI-assisted MERN and Next.js development with Google Antigravity 2.0, NotebookLM, Figma, testing, deployment, capstones, dynamic quizzes and reusable SKILL.md templates.</p>
        <p>
          <Link className="button button--primary button--lg" to="/course/setup-prerequisite-check">Start Course</Link>{' '}
          <Link className="button button--secondary button--lg" to="/final/final-assignment">Final Assignment</Link>
        </p>
      </section>
      <section className="container">
        <div className="cardGrid">
          <div className="courseCard"><h3>Complete MDX Modules</h3><p>Each module is self-contained and does not depend on your Google Doc.</p></div>
          <div className="courseCard"><h3>Interactive Quizzes</h3><p>Dynamic quizzes are powered by React components and TypeScript data.</p></div>
          <div className="courseCard"><h3>Mentor Ready</h3><p>Includes rubrics, troubleshooting, GitHub workflow, support packs, and career showcase assets.</p></div>
        </div>
      </section>
    </main>
  );
}
