import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp"],
};

export default config;
