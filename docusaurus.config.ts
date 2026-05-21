import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Google Antigravity 2.0 MERN & Next.js Full-Stack Course',
  tagline: 'AI-assisted MERN, Figma-to-code, testing, deployment, capstone projects, reusable SKILL.md workflows and advanced Next.js',
  favicon: 'img/favicon.ico',
  url: 'https://sasohan0.github.io',
  baseUrl: '/antigravity-2-mern-nextjs-fullstack-course/',
  organizationName: 'sasohan0',
  projectName: 'antigravity-2-mern-nextjs-fullstack-course',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/sasohan0/antigravity-2-mern-nextjs-fullstack-course/tree/main/'
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'}
      } satisfies Preset.Options
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'Antigravity MERN + Next.js',
      logo: {alt: 'Course Logo', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'courseSidebar', position: 'left', label: 'Course'},
        {to: '/final/final-assignment', position: 'left', label: 'Final Assignment'},
        {to: '/support/troubleshooting-cookbook', position: 'left', label: 'Troubleshooting'},
        {href: 'https://antigravity.google/docs/', label: 'Antigravity Docs', position: 'right'},
        {href: 'https://github.com/sasohan0/antigravity-2-mern-nextjs-fullstack-course', label: 'GitHub', position: 'right'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {label: 'Start Here', to: '/course/setup-prerequisite-check'},
            {label: 'Final Assignment', to: '/final/final-assignment'},
            {label: 'Advanced Next.js Track', to: '/advanced/nextjs-typescript-production-track'}
          ]
        },
        {
          title: 'Official Docs',
          items: [
            {label: 'Docusaurus', href: 'https://docusaurus.io/docs'},
            {label: 'React', href: 'https://react.dev/'},
            {label: 'Next.js', href: 'https://nextjs.org/docs'},
            {label: 'MongoDB', href: 'https://www.mongodb.com/docs/'}
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Antigravity MERN Superuser Course.`
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
