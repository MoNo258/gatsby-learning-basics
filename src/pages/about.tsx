import React from "react";
import Layout from "../components/layout";

const AboutPage: React.FC = () => {
  return <Layout pageTitle="About Me" children={<p>Something about me</p>} />;
};

export default AboutPage;
