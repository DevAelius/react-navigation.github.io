const versions = require('./versions.json');

module.exports = {
  title: 'React Navigation',
  tagline: 'Routing and navigation for your React Native apps',
  url: 'https://reactnavigation.org/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'react-navigation',
  projectName: 'react-navigation.github.io',
  scripts: [
    'https://buttons.github.io/buttons.js',
    '/js/snack.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js'
  ],
  themeConfig: {
    algolia: {
      apiKey: 'c967b4a1491b9cb486d3dca087b771e6',
      indexName: 'reactnavigation',
    },
    navbar: {
      title: 'React Navigation',
      logo: {
        alt: 'React Navigation Logo',
        src: 'img/spiro.svg',
      },
      links: [
        {
          to: 'versions',
          label: versions[0],
        },
        {to: 'docs/getting-started', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/react-navigation',
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
              label: 'Getting Started',
              to: 'getting-started',
            },
            {
              label: 'Building your own Navigator',
              to: 'custom-navigator-overview',
            },
            {
              label: 'Contributing',
              to: 'contributing',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Chat in our Discord channel',
              href: 'https://discord.gg/4xEK3nD',
            },
            {
              label: 'Get help on Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-navigation',
            },
            {
              label: 'Request a feature on Canny',
              href: 'https://react-navigation.canny.io/feature-requests',
            },
            {
              label: 'Report a bug on Github',
              href: 'https://github.com/react-navigation/react-navigation/issues/new/choose',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/reactnavigation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Navigation.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/react-navigation/react-navigation.github.io/edit/source/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
