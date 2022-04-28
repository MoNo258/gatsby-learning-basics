import * as React from "react";
import { Kitten } from "../components/kitten";
import Layout from "../components/layout";
import { Tree } from "../components/tree";
// import type { PageProps } from "gatsby";
// const IndexPage = ({ path }: PageProps) => {
const IndexPage = () => {
  return (
    <Layout
      pageTitle="Home Page"
      children={
        <React.Fragment>
          <p>I'm making this by following the Gatsby Tutorial.</p>
          <p>Below picture was taken by myself at Tenerife.</p>
          <Tree />
          <p>Kitten, on the other hand, is a picture from internet.</p>
          <Kitten />
          <p>
            Need to search something? Go to{" "}
            <span>
              <a href="https://www.google.com/" target={"_blank"}>
                Google
              </a>
            </span>{" "}
            page.
          </p>
        </React.Fragment>
      }
    />
  );
};

export default IndexPage;
