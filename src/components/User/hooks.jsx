import { signIn, signUp } from "../../Redux/Action/userActions";

export const navigate = (history, path) => {
  history.push(path);
};

export const loginHandler = (setIsLoading, dispatch, data) => {
  dispatch(signIn(data, setIsLoading));
};

export const signupHandler = (setIsLoading, dispatch, data) => {
  dispatch(signUp(data, setIsLoading));
};
