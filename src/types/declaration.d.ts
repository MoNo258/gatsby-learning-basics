declare module "*.module.css";

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
    hero_image_alt: string;
    hero_image_credit_link: string;
    hero_image_credit_text: string;
    hero_image: ImageDataLike;
    // hero_image: GatsbyImageHero;
    example_tag: string;
  };
  body: string;
}
interface GraphQLNode {
  data: {
    mdx: GraphQLNodesMdx;
  };
}
interface GatsbyImageHero {
  childImageSharp: {
    gatsbyImageData: {
      layout: string;
      backgroundColor: string;
      images: {
        fallback: {
          src: string;
          srcSet: string;
          sizes: string;
        };
        sources: [
          {
            srcSet: string;
            type: string;
            sizes: string;
          }
        ];
      };
      width: number;
      height: number;
    };
  };
}

interface IAbility {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}
