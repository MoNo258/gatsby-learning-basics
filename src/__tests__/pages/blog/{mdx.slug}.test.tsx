import * as Gatsby from "gatsby";
import React from "react";
import renderer from "react-test-renderer";
import BlogPost from "../../../pages/blog/{mdx.slug}";

const data: GraphQLNode["data"] = {
  mdx: {
    frontmatter: {
      date: "19 Apr 2022",
      title: "My First Post",
      hero_image_alt: "A bird",
      hero_image_credit_link: "https://unsplash.com/photos/pEg7dhMQr7E",
      hero_image_credit_text: "Omkar Rane",
      hero_image: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            placeholder: {
              fallback:
                "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIFAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAT/2gAMAwEAAhADEAAAAcm6WzOWUw3/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIDERIh/9oACAEBAAEFAoTQkYHoxUcBZWOf/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bh//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhL/2gAIAQIBAT8BdM0f/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECERASMf/aAAgBAQAGPwKnEWpWen//xAAbEAADAAMBAQAAAAAAAAAAAAAAAREhMVFBcf/aAAgBAQABPyF6KF8KhcvcWilkzIuESdZofo//2gAMAwEAAgADAAAAEGz/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxAspob/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAECAQE/EIi9Z//EABoQAQEAAwEBAAAAAAAAAAAAAAERACFBMWH/2gAIAQEAAT8QoIevHmBACTgXvMBjQsZKYiO6FB5GYQHUC4VxFk82/c//2Q==",
            },
            backgroundColor: "transparent",
            images: {
              fallback: {
                src: "/static/3b87b2a728a378605a56d2adbd3331e5/062a8/omkar-rane-pEg7dhMQr7E-unsplash.jpg",
                srcSet:
                  "/static/3b87b2a728a378605a56d2adbd3331e5/c6f32/omkar-rane-pEg7dhMQr7E-unsplash.jpg 600w,\n/static/3b87b2a728a378605a56d2adbd3331e5/abce6/omkar-rane-pEg7dhMQr7E-unsplash.jpg 1200w,\n/static/3b87b2a728a378605a56d2adbd3331e5/062a8/omkar-rane-pEg7dhMQr7E-unsplash.jpg 2400w",
                sizes: "(min-width: 2400px) 2400px, 100vw",
              },
              sources: [
                {
                  srcSet:
                    "/static/3b87b2a728a378605a56d2adbd3331e5/87cad/omkar-rane-pEg7dhMQr7E-unsplash.webp 600w,\n/static/3b87b2a728a378605a56d2adbd3331e5/fde00/omkar-rane-pEg7dhMQr7E-unsplash.webp 1200w,\n/static/3b87b2a728a378605a56d2adbd3331e5/6643b/omkar-rane-pEg7dhMQr7E-unsplash.webp 2400w",
                  type: "image/webp",
                  sizes: "(min-width: 2400px) 2400px, 100vw",
                },
              ],
            },
            width: 2400,
            height: 1601,
          },
        },
      },
      example_tag: "Example text in example tag",
    },
    body: 'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "My First Post",\n  "date": "2022-04-19",\n  "hero_image": "./omkar-rane-pEg7dhMQr7E-unsplash.jpg",\n  "hero_image_alt": "A bird",\n  "hero_image_credit_text": "Omkar Rane",\n  "hero_image_credit_link": "https://unsplash.com/photos/pEg7dhMQr7E",\n  "example_tag": "Example text in example tag"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "My first post post"), mdx("p", null, "This is my first blog post! Isn\'t it ", mdx("em", {\n    parentName: "p"\n  }, "great"), "?", mdx("br", null)), mdx("p", null, "Unordered list of ", mdx("strong", {\n    parentName: "p"\n  }, "things"), " are (using dash):"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, "First thing on the list"), mdx("li", {\n    parentName: "ul"\n  }, "2nd"), mdx("li", {\n    parentName: "ul"\n  }, "And last one for the moment")), mdx("p", null, "Ordered list of ", mdx("strong", {\n    parentName: "p"\n  }, "things"), " are:"), mdx("ol", null, mdx("li", {\n    parentName: "ol"\n  }, "First thing on the list"), mdx("li", {\n    parentName: "ol"\n  }, "2nd"), mdx("li", {\n    parentName: "ol"\n  }, "And last one for the moment")), mdx("hr", null), mdx("h4", null, "How this site was created"), mdx("p", null, "This site was made with Gatsby tutorial available under this ", mdx("a", {\n    parentName: "p",\n    "href": "https://www.gatsbyjs.com/docs/tutorial/"\n  }, "link"), ".", mdx("br", null), "\\nThe difference though is that I created a new Gatsby site using the minimal TypeScript starter."), mdx("hr", null), mdx("h4", null, "Interesting thing about this Gatsby tutorial"), mdx("p", null, "I had issues with deploying this app, there was an error about wrong filename (directory ", mdx("inlineCode", {\n    parentName: "p"\n  }, ".cache/compiled"), " was for some reason included in the path).", mdx("br", null), "\\nThe workaround for that was to use ", mdx("inlineCode", {\n    parentName: "p"\n  }, "replace"), ".\\nYet, although application worked on ", mdx("em", {\n    parentName: "p"\n  }, "dev"), " and was build properly (", mdx("inlineCode", {\n    parentName: "p"\n  }, "gatsby build"), "), it was still not working while publishing on ", mdx("strong", {\n    parentName: "p"\n  }, "Gatsby Cloud"), ".", mdx("br", null), "\\nThe final solution was to use ", mdx("inlineCode", {\n    parentName: "p"\n  }, "path"), " option like this: ", mdx("inlineCode", {\n    parentName: "p"\n  }, "path.join(\\".cache\\", \\"compiled\\")"), ".\\nIt turned out that problem is connected to operating system and what is used to point to directory: ", mdx("em", {\n    parentName: "p"\n  }, "slash"), " or ", mdx("em", {\n    parentName: "p"\n  }, "backslash"), "."));\n}\n;\nMDXContent.isMDXComponent = true;',
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
jest.mock("gatsby-plugin-mdx", () => {
  return {
    MDXRenderer: ({ children }: any) => {
      return <div>{children}</div>;
    },
  };
});
jest.mock("gatsby-plugin-image", () => {
  return {
    GatsbyImage: ({ image, alt }: any) => {
      return (
        <img
          width="2400"
          height="1600"
          data-main-image=""
          sizes="(min-width: 2400px) 2400px, 100vw"
          decoding="async"
          src={image.images.fallback.src}
          alt={alt}
        />
      );
    },
  };
});

describe("BlogPost", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders correctly", () => {
    const tree = renderer.create(<BlogPost data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
