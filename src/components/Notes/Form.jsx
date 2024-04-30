import { Fragment } from "react";

import { useTheme } from "@emotion/react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { onChangeData } from "./hooks";
import { useForm } from "../../hooks/use-form";
import Spinner from "../UI/Spinner";

const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "spinner",
})(({ theme, spinner }) => ({
  textAlign: "start",
  width: "100%",
  maxWidth: theme.spacing(65.5),
  "& .MuiSelect-icon": {
    color: theme.palette.primary.main,
  },

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

    grid: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
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

const Form = ({
  current,
  title,
  Icon,
  setOpen,
  hasChanged,
  setHasChanged,
  onClickHandler,
  isLoading,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [form, onChangeHandler] = useForm({
    title: current ? current.title : "",
    note: current ? current.note : "",
  });

  const postNote = () => {
    let data = {
      title: form.title.value,
      note: form.note.value,
    };

    onClickHandler(data);
  };

  let disabled =
    form.title.isValid && form.note.value !== "" && form.note.isValid
      ? false
      : true;

  return (
    <StyledDiv spinner={isLoading}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div style={classes.titleSection}>
            <div style={classes.iconContainer}>
              <Icon sx={classes.icon} />
            </div>
            <Typography sx={classes.title} variant="h3">
              {title}
            </Typography>
          </div>
          <Grid container spacing={2} sx={classes.grid}>
            <Grid item xs={12}>
              <TextField
                autoComplete="newValue"
                value={form.title.value}
                required
                fullWidth
                id="title"
                name="title"
                label="Titulo"
                inputProps={{
                  minLength: 2,
                  maxLength: 100,
                }}
                onChange={(e) => {
                  onChangeHandler(e);
                  onChangeData(setHasChanged, hasChanged);
                }}
                error={!form.title.isValid}
                InputLabelProps={{ required: false }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nueva nota"
                id="note"
                multiline
                minRows={4}
                defaultValue={form.note.value}
                variant="outlined"
                onChange={(e) => {
                  onChangeHandler(e);
                  onChangeData(setHasChanged, hasChanged);
                }}
                fullWidth
                inputProps={{
                  minLength: 2,
                  maxLength: 1000,
                }}
                error={!form.note.isValid}
              />
            </Grid>
          </Grid>
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
                disabled={disabled}
                variant="contained"
                color="primary"
                disableElevation
                onClick={postNote}
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

export default Form;
