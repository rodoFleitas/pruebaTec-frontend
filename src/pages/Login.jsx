import { useState } from "react";

import styled from "@emotion/styled";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginSignupLayout from "../components/Shared/LoginSignupLayout";
import Form from "../components/User/LoginForm";

import { loginHandler, navigate } from "../components/User/hooks";

const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "isLoading",
})(({ theme, isLoading }) => ({
  textAlign: "start",
  width: "100%",

  ...(isLoading && {
    width: theme.spacing(65.5),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(31.5),
    },
  }),
}));

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoginSignupLayout title="Iniciar sesión">
      <StyledDiv isLoading={isLoading}>
        <Form
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          submitHandler={(data) => loginHandler(setIsLoading, dispatch, data)}
          navigate={() => navigate(history, "/registrarse")}
        />
      </StyledDiv>
    </LoginSignupLayout>
  );
}
