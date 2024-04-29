import { Fragment } from "react";

import UserRoutes from "./User/UserRoutes";

const PrivateRoutes = ({ user }) => {
  return <Fragment>{user && <UserRoutes />}</Fragment>;
};

export default PrivateRoutes;
