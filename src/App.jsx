import { Fragment, lazy, Suspense, useState } from "react";

import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

import styled from "@emotion/styled";

import SnackbarCustom from "./components/UI/SnackbarCustom";
import Spinner from "./components/UI/Spinner";
import Navigation from "./components/UI/Navigation";

// Routes
const PublicRoutes = lazy(() => import("./Routes/PublicRoutes"));
const PrivateRoutes = lazy(() => import("./Routes/PrivateRoutes"));

const Main = styled("div")(({ theme }) => ({
  overflow: "auto",
  height: "100%",
  padding: theme.spacing(2),
  marginLeft: 0,
  backgroundColor: theme.palette.customColors.backgroundBlack
}));

const useStyles = () => {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "space-between",
      backgroundColor: "#FAFAFA",
    },
    spinnerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
  };

  return styles;
};

const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const user = useSelector((state) => state.user.userData);

  const [isLoading] = useState(false);

  return (
    <div style={classes.root}>
      {isLoading ? (
        <div style={classes.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <Fragment>
          {user && <Navigation user={user} />}

          <Main>
            <Suspense fallback={<Spinner />}>
              {!user ? <PublicRoutes /> : <PrivateRoutes user={user} />}
            </Suspense>
          </Main>

          <SnackbarCustom />
        </Fragment>
      )}
    </div>
  );
};

export default App;
