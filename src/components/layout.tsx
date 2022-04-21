import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import {
  container,
  footer,
  heading,
  navLinkItem,
  navLinks,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

type LayoutProps = {
  pageTitle: string;
};
const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  //  You can only call useStaticQuery once per file.
  const data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    siteBuildMetadata: {
      buildTime: string;
    };
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p className={footer}>
          This page was created for practising purposes with Gatsby Tutorial.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
