module.exports = {
  title: 'HACC Hui',
  tagline: 'Documentation for the HACC Hui project.',
  url: 'https://hacc-hui.github.io',
  baseUrl: '/',
  favicon: 'img/HACC_icon_2021.jpg',
  organizationName: 'HACC-Hui', // Usually your GitHub org/user name.
  projectName: 'HACC-Hui.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HACC Hui',
      logo: {
        alt: 'HACC Hui',
        src: 'img/HACC_icon_2021.jpg',
      },
      links: [
        {
          to: 'docs/overview/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/HACC-Hui/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Motivation',
              to: 'docs/overview/motivation',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Hawaii Annual Code Challenge 2021',
              href: 'https://hacc.hawaii.gov',
            },
            {
              label: 'hacc2021.slack.com',
              href: 'https://hacc2021.slack.com',
            },
            {
              label: 'HACC Hui GitHub',
              href: 'https://github.com/HACC-Hui/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} University of Hawaii. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
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
