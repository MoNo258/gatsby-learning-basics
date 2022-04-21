import type { GatsbyConfig } from "gatsby";
import path from "path";

const cacheFolder = path.join(".cache", "compiled");

const dirnameNew =
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "development"
    ? __dirname.replace(cacheFolder, "")
    : __dirname;

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
        path: `${dirnameNew}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};

export default config;
