declare module "*.module.css";

interface GraphQLNodes {
  absolutePath: string;
  name: string;
}
interface GraphQLAllFiles {
  data: {
    allFile: {
      nodes: NodesData[];
    };
  };
}

interface GraphQLNodesMdxAll {
  frontmatter: {
    date: string;
    title: string;
  };
  id: string;
  body: string;
  slug: string;
}
interface GraphQLNodes {
  data: {
    allMdx: {
      nodes: GraphQLNodesMdxAll[];
    };
  };
}

interface GraphQLNodesMdx {
  frontmatter: {
    date: string;
    title: string;
  };
  body: string;
}
interface GraphQLNode {
  data: {
    mdx: GraphQLNodesMdx;
  };
}
