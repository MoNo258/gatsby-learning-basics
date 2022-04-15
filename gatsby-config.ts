import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    // siteUrl: `https://www.yourdomain.tld`,
    title: "Gatsby basics Application",
  },
  // plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp"],
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
  ],
};

export default config;
