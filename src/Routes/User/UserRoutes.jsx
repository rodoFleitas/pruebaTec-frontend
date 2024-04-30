import { Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "../helperRoutes";
import { useSelector } from "react-redux";
import NotesPage from "../../pages/NotesPage";

const UserRoutes = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <Switch>
      <PrivateRoute
        exact
        path="/notas"
        component={() => <NotesPage user={user} />}
        user={user}
      />
      <Redirect path="/**" to="/notas" />
    </Switch>
  );
};

export default UserRoutes;
