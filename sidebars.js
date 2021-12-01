// @ts-check
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "01-introduction",
    {
      type: "category",
      label: "The basics",
      collapsed: false,
      items: [
        "the-basics/01-background",
        "the-basics/02-vision",
        "the-basics/03-company",
        "the-basics/04-highlight",
        {
          type: "category",
          label: "User groups",
          collapsed: false,
          items: [
            "the-basics/users/01-common",
            "the-basics/users/02-strategy-makers",
            "the-basics/users/03-strategy-takers",
          ],
        },
        "the-basics/06-token",
        "the-basics/07-roadmap",
        "the-basics/08-tokenomics",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: true,
      items: ["guides/01-ido", "guides/02-where-to-buy"],
    },
    {
      type: "category",
      label: "Tips",
      collapsed: true,
      items: ["tips/01-faq"],
    },
    {
      type: "category",
      label: "Social links",
      collapsed: true,
      items: ["links/01-social-links"],
    },
  ],
};

module.exports = sidebars;
