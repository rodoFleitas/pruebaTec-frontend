import { signIn } from "../../Redux/Action/userActions";

export const navigate = (history, path) => {
  history.push(path);
};

export const loginHandler = (setIsLoading, dispatch, data) => {
  dispatch(signIn(data, setIsLoading));
};


