import { useTheme } from "@emotion/react";
import { Card, Container, Typography } from "@mui/material";

const useStyles = (theme) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    card: {
      maxWidth: theme.spacing(71.5),
      boxShadow: "none",
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.customColors.darkCard
          : theme.palette.customColors.white,
      borderRadius: theme.spacing(2),
      overflow: "auto",
      width: "100%",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(2),
    },
    logo: {
      maxWidth: 160,
      display: "flex",
      justifyContent: "center",
    },
  };
  return styles;
};

export default function LoginSignupLayout({ title, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container
      sx={classes.container}
      style={{
        height: "100%",
        padding: 0,
      }}
      maxWidth="xl"
    >
      <Card sx={classes.card}>
        <div
          style={{
            padding: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/*  <div style={classes.imageContainer}>
            <img
              src={isDark ? LogoLight : LogoDark}
              style={classes.logo}
              alt="Logo Helpi"
            />
          </div> */}

          <Typography variant="h2" color="primary">
            {title}
          </Typography>

          {children}
        </div>
      </Card>
    </Container>
  );
}
