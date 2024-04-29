import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { createCustomTheme } from "./hooks/theme";

import App from "./App";

const AppLayout = () => {
  const themeCustom = createTheme(createCustomTheme(false));

  return (
    <ThemeProvider theme={themeCustom}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default AppLayout;
