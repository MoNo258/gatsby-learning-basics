import * as Gatsby from "gatsby";
import React from "react";
import renderer from "react-test-renderer";
import IndexPage from "../../pages/index";

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

describe("IndexPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders correctly", () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
