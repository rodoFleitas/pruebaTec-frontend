import { Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "../helperRoutes";
import { useSelector } from "react-redux";

const UserRoutes = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <Switch>
      <PrivateRoute
        exact
        path="/notas"
        component={() => (
          <div>
            <h2>Notas</h2>
          </div>
        )}
        user={user}
      />
      <Redirect path="/**" to="/notas" />
    </Switch>
  );
};

export default UserRoutes;
