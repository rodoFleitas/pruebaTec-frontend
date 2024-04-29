import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({ component, ...options }) => {
  return <Route {...options} component={component} />;
};

export const PrivateRoute = ({ user, component, ...options }) => {
  if (user) return <Route {...options} component={component} />;
  return <Redirect to="/" />;
};
