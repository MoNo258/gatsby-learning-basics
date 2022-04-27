import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    // siteUrl: `https://www.yourdomain.tld`,
    title: "Gatsby basics Application",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: `blurred`,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: path.resolve(`blog`),
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};

export default config;
