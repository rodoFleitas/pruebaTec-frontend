import { Fragment, useState } from "react";

import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";

import Spinner from "../UI/Spinner";

import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "spinner",
})(({ theme, spinner }) => ({
  textAlign: "start",
  width: "100%",
  maxWidth: theme.spacing(65.5),

  ...(spinner && {
    width: theme.spacing(65.5),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(31.5),
    },
  }),
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
  justifyContent: "flex-end",
  alignItems: "center",

  "& .MuiButton-root": {
    width: theme.spacing(11.25),
    height: theme.spacing(3.75),
    borderRadius: 3,
    fontSize: "12px",
  },

  "& .MuiButton-label": {
    padding: 0,
  },
}));

const useStyles = (theme) => {
  const styles = {
    titleSection: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "3px",
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(0.5),
      maxHeight: theme.spacing(4),
      maxWidth: theme.spacing(4),
    },
    icon: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      color: theme.palette.customColors.white,
    },
    title: {
      marginLeft: theme.spacing(1),
    },

    confirmButton: {
      "&:hover": {
        color: theme.palette.customColors.white,
      },
    },
    cancelButton: {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.customColors.lightGrey
          : theme.palette.grey[700],
    },
  };
  return styles;
};

const DeleteComponent = ({ title, Icon, onClickHandler, setOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledDiv spinner={isLoading}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div style={classes.titleSection}>
            <div style={classes.iconContainer}>
              {Icon ? (
                <Icon sx={classes.icon} />
              ) : (
                <DeleteIcon sx={classes.icon} />
              )}
            </div>
            <Typography sx={classes.title} variant="h3">
              {title}
            </Typography>
          </div>
          <Typography sx={classes.title} variant="body1">
            ¿Seguro que quiere continuar?
          </Typography>
          <StyledGrid container spacing={1}>
            <Grid item>
              <Button
                sx={classes.cancelButton}
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={classes.confirmButton}
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => onClickHandler(setIsLoading)}
              >
                Aceptar
              </Button>
            </Grid>
          </StyledGrid>
        </Fragment>
      )}
    </StyledDiv>
  );
};

export default DeleteComponent;
