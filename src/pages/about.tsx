import React from "react";
import { Avatar } from "../components/avatar";
import Layout from "../components/layout";

const AboutPage: React.FC = () => {
  return (
    <Layout
      pageTitle="About Me"
      children={
        <React.Fragment>
          <p>Something about me</p>
          <Avatar />
        </React.Fragment>
      }
    />
  );
};

export default AboutPage;
