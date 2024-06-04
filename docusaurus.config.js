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
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/js/',
          activeBasePath: 'docs/js/',
          label: 'JS/TS',
          position: 'left',
        },
        {
          to: 'docs/php/',
          activeBasePath: 'docs/php/',
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
