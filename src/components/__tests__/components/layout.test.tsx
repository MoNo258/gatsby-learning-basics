import * as Gatsby from "gatsby";
import React from "react";
import renderer from "react-test-renderer";
import Layout from "../../layout";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: "Gatsby basics Application",
    },
  },
  siteBuildMetadata: {
    buildTime: "2022-04-25T06:17:12.000Z",
  },
}));

describe("Layout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout pageTitle="Page title">
          <h1>bla</h1>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
