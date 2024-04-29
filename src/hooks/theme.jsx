export const createCustomTheme = (isDark) => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        cs: 400,
        sm: 600,
        cm: 799,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: isDark ? "#63A4FF" : "#3A7CA5",
        light: isDark ? "#63A4FF" : "#D5DFE5",
        dark: isDark ? "#24365c" : "#3A7CA5",
      },
      secondary: {
        main: "#818cf8",
        light: "##8f8cf8",
        dark: "#818cf8",
      },
      grey: { 100: "#F5F5F5", 500: "#8F8F8F", 700: "#5F5F5F", 900: "#212121" },
      customColors: {
        delete: "#EF233C",
        success: "#65BF51",
        black: "#000000de",
        darkGrey: "#37323E",
        lightGrey: "#E4E4E4",
        white: "#FFFFFF",
        customWhite: "#cdcdcd4d",
        backgroundBlack: "#1C1C1C",
        darkCard: "#333333",
        hoverDark: "#645F6A99",
        badReaction: "#E9374D",
        hoverGray: "#ffffff17",
        avatar: {
          darkBg: "#757575",
          lightBg: "#BDBDBD",
          darkColor: "#303030",
          lightColor: "#FAFAFA",
        },
        modal: {
          lightBg: "#FFFFFF",
          darkBg: "#424242",
        },
        wheel: {
          bg: "#63A4FF",
        },
      },
    },
    typography: {
      fontFamily: "'Rubik', 'Roboto', 'Arial', sans-serif",
      h1: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
        letterSpacing: 0,
        "@media (min-width:960px)": {
          fontSize: "3rem",
          lineHeight: "2.9375rem",
          letterSpacing: "-0.016rem",
        },
      },
      h2: {
        fontFamily: "Red Hat Display",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "34px",
        lineHeight: "40px",
        letterSpacing: "0.02em",
      },
      h3: {
        fontFamily: "Red Hat Display",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "40px",
        letterSpacing: "0.02em",
        "@media (min-width:960px)": {},
      },
      h4: {
        fontFamily: "Red Hat Display",
        fontWeight: 400,
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        letterSpacing: 0,
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.75rem",
        letterSpacing: "0.00938em",
        "@media (min-width:960px)": {
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          letterSpacing: "0.0156rem",
        },
      },

      body1: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        letterSpacing: "0.0156rem",
        "@media (min-width:960px)": {
          fontSize: "1rem",
          lineHeight: "1.5rem",
          letterSpacing: "0.00938em",
        },
      },
      body2: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        letterSpacing: "0.0156rem",
      },

      button: {
        fontWeight: 500,
        fontSize: "0.775rem",
        lineHeight: "1rem",
        letterSpacing: "0.0625rem",
        textTransform: "uppercase",
        "@media (min-width:660px)": {
          fontSize: "0.875rem",
        },
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: "1rem",
        letterSpacing: "0.025rem",
        "@media (min-width:960px)": {
          fontSize: "1rem",
          lineHeight: "1.3rem",
        },
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 12,
        },
        label: {
          padding: 10,
        },
        textPrimary: {
          color: "#1976D2",
        },
      },
    },
  };
};
