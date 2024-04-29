import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";

const PublicRoutes = () => {
  return (
    <Switch>
      <PublicRoute
        exact
        path="/iniciar-sesion"
        component={() => (
          <div>
            <h2>Iniciar sesion</h2>
          </div>
        )}
      />
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
