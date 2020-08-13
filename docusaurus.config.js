module.exports = {
  title: 'HACC Hui',
  tagline: 'Documentation for the ICS 414 Fall 2020 project.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/hacc.png',
  organizationName: 'HACC-Hui', // Usually your GitHub org/user name.
  projectName: 'HACC-Hui.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HACC Hui',
      logo: {
        alt: 'HACC Hui',
        src: 'img/hacc.png',
      },
      links: [
        {
          to: 'docs/overview/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'file:///Users/carletonmoore/Documents/GitHub/HACC-Hui/HACC-Hui/docs/index.html',
          label: 'JSDoc',
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
              label: 'Hawaii Annual Code Challenge 2020',
              href: 'https://hacc.hawaii.gov',
            },
            {
              label: 'hacc2020.slack.com',
              href: 'https://hacc2020.slack.com',
            },
            {
              label: 'HACC Hui GitHub',
              href: 'https://github.com/HACC-Hui/',
            },
            {
              label: 'ICS 414 Course Website',
              href: 'https://courses.ics.hawaii.edu/ics414f20',
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
