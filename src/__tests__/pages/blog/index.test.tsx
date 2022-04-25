import * as Gatsby from "gatsby";
import React from "react";
import renderer from "react-test-renderer";
import BlogPage from "../../../pages/blog";

const data: GraphQLNodes["data"] = {
  allMdx: {
    nodes: [
      {
        frontmatter: {
          date: "21 April 2022",
          title: "Last one for now",
        },
        id: "7f0e18b3-960c-580c-bcf1-1c1e0166c535",
        slug: "third-post/",
        body: "",
      },
      {
        frontmatter: {
          date: "20 April 2022",
          title: "Another Post",
        },
        id: "9d3fa30c-b8ed-5bc0-aaf7-2a66efbf621e",
        slug: "second-post/",
        body: "",
      },
      {
        frontmatter: {
          date: "19 April 2022",
          title: "My First Post",
        },
        id: "0a8ad579-4e9d-5d88-bb48-44463f88150d",
        slug: "first-post/",
        body: "",
      },
    ],
  },
};

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

describe("BlogPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders correctly", () => {
    const tree = renderer.create(<BlogPage data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
