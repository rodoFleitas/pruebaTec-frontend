import { useTheme } from "@emotion/react";
import { Button, TextField, Typography } from "@mui/material";

import { useForm } from "../../hooks/use-form";
import Spinner from "../UI/Spinner";

const useStyles = (theme) => {
  const styles = {
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
      textAlign: "end",
    },

    submit: {
      margin: theme.spacing(2, 0),
      padding: theme.spacing(2, 3.25),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.customColors.white,
      borderRadius: theme.spacing(1.5),

      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },

    signup: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(3, 0),
    },

    signupText: {
      color: theme.palette.primary.main,
      fontWeight: 500,

      "&:hover": {
        cursor: "pointer",
        transform: "scale(1.03)",
        fontWeight: 600,
      },
    },
  };
  return styles;
};

const Form = ({ isLoading, setIsLoading, submitHandler, navigate }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [form, onChangeHandler] = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onClickHandler = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    let data = {
      name: form.name.value,
      lastname: form.lastname.value,
      email: form.email.value,
      password: form.password.value,
    };

    submitHandler(data);
  };

  const disabled =
    !form.email.isValid ||
    form.email.value === "" ||
    !form.password.isValid ||
    form.password.value === "";

  return !isLoading ? (
    <form style={classes.form} onSubmit={onClickHandler}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nombre(s)"
        name="name"
        autoComplete="newValue"
        type="name"
        autoFocus
        value={form.name.value}
        onChange={onChangeHandler}
        inputProps={{
          minLength: 2,
          maxLength: 100,
          pattern: "^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ .]+$",
        }}
        error={!form.name.isValid}
        InputLabelProps={{ required: false }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="lastname"
        label="Apellido(s)"
        name="lastname"
        autoComplete="newValue"
        type="lastname"
        autoFocus
        value={form.lastname.value}
        onChange={onChangeHandler}
        inputProps={{
          minLength: 2,
          maxLength: 100,
          pattern: "^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ .]+$",
        }}
        error={!form.lastname.isValid}
        InputLabelProps={{ required: false }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Correo"
        name="email"
        autoComplete="email"
        type="email"
        autoFocus
        value={form.email.value}
        onChange={onChangeHandler}
        inputProps={{
          maxLength: 256,
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
        }}
        error={!form.email.isValid}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="new-password"
        value={form.password.value}
        onChange={onChangeHandler}
        inputProps={{
          pattern: "[a-zA-Z0-9@#!$&?.*]*$",
          minLength: 8,
        }}
        error={!form.password.isValid}
        style={{ marginBottom: 16 }}
        InputLabelProps={{ required: false }}
      />
      <Button
        disabled={disabled}
        type="submit"
        fullWidth
        variant="contained"
        sx={classes.submit}
      >
        Registrarse
      </Button>

      <div style={classes.signup}>
        <Typography sx={classes.signupText} onClick={navigate}>
          ¿Ya tienes una cuenta? Inicia sesión.
        </Typography>
      </div>
    </form>
  ) : (
    <Spinner />
  );
};

export default Form;
