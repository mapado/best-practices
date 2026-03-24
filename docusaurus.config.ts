import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes } from 'prism-react-renderer';

const config: Config = {
  title: 'Bonnes pratiques de Mapado',
  tagline: 'Comment être un bon développeur chez Mapado',
  url: 'https://mapado.github.io/',
  baseUrl: '/best-practices/',
  favicon: 'img/favicon.ico',
  organizationName: 'Mapado', // Usually your GitHub org/user name.
  projectName: 'best-practices', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bonnes pratiques',
      logo: {
        alt: 'Mapado',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/common',
          activeBasePath: 'docs/common',
          label: 'Général',
          position: 'left',
        },
        {
          to: 'docs/js',
          activeBasePath: 'docs/js',
          label: 'JS/TS',
          position: 'left',
        },
        {
          to: 'docs/php',
          activeBasePath: 'docs/php',
          label: 'PHP',
          position: 'left',
        },
        {
          href: 'https://github.com/mapado/best-practices',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/mapado/best-practices',
    //         },
    //       ],
    //     },
    //   ],
    // },
    prism: {
      theme: themes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'php', 'gherkin'],
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mapado/best-practices/edit/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/mapado/best-practices/edit/master/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;
