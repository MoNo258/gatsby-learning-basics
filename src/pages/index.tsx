import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout
      pageTitle="Gatsby basics"
      children={
        <React.Fragment>
          <p>I'm making this by following the Gatsby Tutorial.</p>
          <p>
            Need to search something? Go to{" "}
            <span>
              <a href="https://www.google.com/" target={"_blank"}>
                Google
              </a>
            </span>{" "}
            page.
          </p>
        </React.Fragment>
      }
    />
    // <main>
    //   <title>Gatsby basics</title>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    //   <p>
    //     Need to search something? Go to{" "}
    //     <span>
    //       <a href="https://www.google.com/" target={"_blank"}>
    //         Google
    //       </a>
    //     </span>{" "}
    //     page.
    //   </p>
    // </main>
  );
};

export default IndexPage;
