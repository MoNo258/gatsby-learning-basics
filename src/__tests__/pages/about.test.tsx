import * as Gatsby from "gatsby";
import React from "react";
import renderer from "react-test-renderer";
import AboutPage from "../../pages/about";

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

describe("AboutPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders correctly", () => {
    const tree = renderer.create(<AboutPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
