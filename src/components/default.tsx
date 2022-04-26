import { Link } from "gatsby";
import React from "react";
import { isLoggedIn } from "../services/auth";

const Default: React.FC<{ path: string }> = () => {
  return (
    <div>
      <title>Default</title>
      <header>Header: Default</header>
      <main>
        <h1>This is for client-only routes</h1>
        <h2>Below is for Site with user authentication</h2>
        <p>
          Everything created under path <em>`/app`</em> or{" "}
          <em>`/app/...name...`</em> is connected to client-only routes.
        </p>
        <p>
          You are in the <strong>default</strong> location for APP directory
          (which is <em>`/app`</em>).
        </p>
        <div>
          <p>
            {isLoggedIn() ? (
              <>
                You are logged in, so check your{" "}
                <Link to="/app/profile">profile</Link>
              </>
            ) : (
              <>
                You should <Link to="/app/login">log in</Link> to see restricted
                content
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Default;
