import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  courseSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'course/setup-prerequisite-check',
        'course/introduction',
        'course/utilize-notebooklm'
      ]
    },
    {
      type: 'category',
      label: 'Core Modules',
      collapsed: false,
      items: [
        'course/module-01-antigravity-setup',
        'course/module-02-spec-first-development',
        'course/module-03-codebase-architecture',
        'course/module-04-skill-md-mastery',
        'course/module-05-figma-to-code',
        'course/bonus-05-website-ui-replication',
        'course/module-06-frontend-implementation',
        'course/module-07-backend-implementation',
        'course/module-08-fullstack-integration',
        'course/module-09-testing-qa',
        'course/module-10-deployment'
      ]
    },
    {
      type: 'category',
      label: 'Capstone and Advanced',
      collapsed: false,
      items: [
        'final/final-assignment',
        'advanced/reusable-skill-md-library',
        'advanced/nextjs-typescript-production-track'
      ]
    },
    {
      type: 'category',
      label: 'Support Packs',
      collapsed: false,
      items: [
        'support/troubleshooting-cookbook',
        'support/github-workflow-code-review',
        'support/quality-gate',
        'support/assessment-pack',
        'support/career-showcase-pack',
        'mentor/instructor-delivery-guide'
      ]
    }
  ]
};

export default sidebars;
