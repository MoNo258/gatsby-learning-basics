import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import { container } from "./index.module.css";

type BlogPageProps = GraphQLNodes;
const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <div key={node.id} className={container}>
          <article>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        </div>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
