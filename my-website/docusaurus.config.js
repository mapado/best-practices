module.exports = {
  title: 'best-practice',
  tagline: "Mapado's developer best practices",
  url: 'https://mapado.github.io/',
  baseUrl: '/best-practices/',
  favicon: 'img/favicon.ico',
  organizationName: 'Mapado', // Usually your GitHub org/user name.
  projectName: 'best-practices', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mapado best practices',
      logo: {
        alt: 'Mapado',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/fr/index',
          activeBasePath: 'docs/fr/',
          label: 'Français',
          position: 'left',
        },
        {
          to: 'docs/en/index',
          activeBasePath: 'docs/en/',
          label: 'English',
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
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
