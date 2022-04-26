import { navigate } from "gatsby";
import React from "react";
import { isBrowser, isLoggedIn } from "../services/auth";

type PrivateRouteProps = {
  path: string;
  component: React.FC;
};
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!isLoggedIn() && isBrowser && window.location.pathname !== `/app/login`) {
    navigate("/app/login");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
