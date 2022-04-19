// import React from "react";
// import Layout from "../components/layout";

// const BlogPage: React.FC = () => {
//   return (
//     <Layout pageTitle="My Blog Posts">
//       <p>My posts will go in here</p>
//     </Layout>
//   );
// };

// export default BlogPage;

import React from "react";
import Layout from "../components/layout";

const BlogPage: React.FC = () => {
  return (
    <Layout
      pageTitle="My Blog Posts"
      children={
        <React.Fragment>
          <p>My posts will go in here</p>
        </React.Fragment>
      }
    />
  );
};

export default BlogPage;
