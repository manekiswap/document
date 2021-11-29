// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manekiswap - Knowledge base',
  tagline: 'Manekiswap',
  url: 'https://info.manekiswap.com',
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
        blog: {
          path: "blog",
          routeBasePath: "/blog",
          showReadingTime: true,
          editUrl: 'https://github.com/manekiswap/manekiswap.github.io/edit/master/',
        },
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/manekiswap/manekiswap.github.io/edit/master/',
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
            type: 'doc',
            docId: 'concepts/protocol-overview/01-how-uniswap-works',
            position: 'left',
            label: 'Document',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/manekiswap/manekiswap.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Docs',
                to: '/',
              },{
                label: 'Blog',
                to: '/blog',
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
        additionalLanguages: ["solidity"],
      },
    }),
};

module.exports = config;
