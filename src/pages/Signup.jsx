import { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import LoginSignupLayout from "../components/Shared/LoginSignupLayout";
import Form from "../components/User/SignupForm";
import { navigate, signupHandler } from "../components/User/hooks";

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

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoginSignupLayout title="Registrarse">
      <StyledDiv isLoading={isLoading}>
        <Form
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          submitHandler={(data) => signupHandler(setIsLoading, dispatch, data)}
          navigate={() => navigate(history, "/iniciar-sesion")}
        />
      </StyledDiv>
    </LoginSignupLayout>
  );
}
