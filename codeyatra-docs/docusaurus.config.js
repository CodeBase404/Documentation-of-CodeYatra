// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeYatra',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://documentation-of-code-yatra-n2g5.vercel.app',
  baseUrl: '/',

  organizationName: 'CodeBase404', // Your GitHub org/user
  projectName: 'CodeYatra-Coding-Platform', // Your GitHub repo

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

 presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        routeBasePath: '/', // ✅ This makes /docs/intro accessible at /
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/CodeBase404/CodeYatra-Coding-Platform/edit/main/',
      },
      blog: false, // ✅ Disable blog
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }),
  ],
],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CodeYatra',
        logo: {
          alt: 'CodeYatra Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/CodeBase404/CodeYatra-Coding-Platform',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://codebase404.github.io/CodeYatra-Coding-Platform',
            label: 'CodeYatra',
            position: 'right',
          },
        ],
      },
    
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
