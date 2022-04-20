import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../../components/layout";

type BlogPageProps = GraphQLNode;
const BlogPost: React.FC<BlogPageProps> = ({ data }) => {
  // getting image information with helper function
  const image = getImage(data.mdx.frontmatter.hero_image)!;
  // the same information without helper function
  // const image = data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData;
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Created: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <small>
        Photo credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </small>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD MMM YYYY")
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
