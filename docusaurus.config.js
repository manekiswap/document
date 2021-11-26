// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manekiswap Document',
  tagline: 'Manekiswap',
  url: 'https://document.manekiswap.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'manekiswap',
  projectName: 'manekiswap.github.io',
  deploymentBranch: 'gh-pages',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/manekiswap/document/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Manekiswap',
        logo: {
          alt: 'Manekiswap Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/manekiswap/document',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/manekiswap',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/manekiswap',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.manekiswap.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/manekiswap',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Manekiswap, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
