import { Router } from "@reach/router";
import React from "react";
import Default from "../../components/default";
import Details from "../../components/details";
import Layout from "../../components/layout";
import Login from "../../components/login";
import PrivateRoute from "../../components/privateRoute";
import Profile from "../../components/profile";

const App: React.FC = () => {
  return (
    <Layout pageTitle="Pages using ROUTER">
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/details" component={Details} />
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </Layout>
  );
};
export default App;
