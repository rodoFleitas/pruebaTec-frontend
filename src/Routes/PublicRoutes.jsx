import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";

//Paginas
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/iniciar-sesion" component={() => <Login />} />
      <PublicRoute exact path="/registrarse" component={() => <Signup />} />
      <Redirect path="/**" to="/iniciar-sesion" />
    </Switch>
  );
};

export default PublicRoutes;
