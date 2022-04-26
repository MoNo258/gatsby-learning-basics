import React from "react";

const Details: React.FC = () => {
  return (
    <div>
      <title>Details</title>
      <header>Header Details</header>
      <main>
        <h1>This is for client-only routes</h1>
        <p>
          Everything created under path <em>`/app`</em> or{" "}
          <em>`/app/...name...`</em> is connected to client-only routes.
        </p>
        <p>
          You are in the <strong>details</strong> location for APP directory
          (which is <em>`/app/details`</em>).
        </p>
      </main>
    </div>
  );
};

export default Details;
