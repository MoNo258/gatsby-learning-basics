import { Link, navigate } from "gatsby";
import React from "react";
import { getUser, isLoggedIn, logout } from "../services/auth";

const NavBar: React.FC = () => {
  let greetingMessage = "";
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`;
  } else {
    greetingMessage = "You are not logged in";
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>
        <strong>{greetingMessage}</strong>{" "}
        <em style={{ fontSize: "0.8rem", paddingLeft: "1rem" }}>
          Extra NavBar for client-only routes
        </em>
      </span>
      <nav>
        <Link to="/app">AppDefault</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <React.Fragment>
            <Link to="/app/details">Details</Link>{" "}
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                logout(() => navigate(`/app/login`));
              }}
            >
              Logout
            </a>
          </React.Fragment>
        ) : null}
      </nav>
    </div>
  );
};

export default NavBar;
