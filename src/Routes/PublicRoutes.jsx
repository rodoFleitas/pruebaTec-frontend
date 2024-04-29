import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";

//Paginas
import Login from "../pages/Login";

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/iniciar-sesion" component={() => <Login />} />
      <PublicRoute
        exact
        path="/registrarse"
        component={() => (
          <div>
            <h2>Registrarse</h2>
          </div>
        )}
      />
      <Redirect path="/**" to="/iniciar-sesion" />
    </Switch>
  );
};

export default PublicRoutes;
