import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { createCustomTheme } from "./hooks/theme";
import { useSelector } from "react-redux";

import App from "./App";

const AppLayout = () => {
  const darkTheme = useSelector((state) => state.darkTheme.dark);
  const themeCustom = createTheme(createCustomTheme(darkTheme));

  return (
    <ThemeProvider theme={themeCustom}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default AppLayout;
