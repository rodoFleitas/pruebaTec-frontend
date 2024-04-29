import axios from "axios";
import { LOG_IN, LOG_OUT, SET_THEME } from "./actionTypes";

import { setSnackData } from "./snackDataActions";
import { setTheme } from "./themeActions";

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem(import.meta.env.VITE_LOCALSTORAGE_KEY);

  dispatch({
    type: LOG_OUT,
    payload: null,
  });

  dispatch({
    type: SET_THEME,
    payload: false,
  });
};

export const signUp = (data, setIsLoading) => (dispatch) => {
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, data)
    .then((res) => {
      dispatch({
        type: LOG_IN,
        payload: res.data.user,
      });

      localStorage.setItem(
        import.meta.env.VITE_LOCALSTORAGE_KEY,
        JSON.stringify(res.data.user)
      );

      dispatch(
        setSnackData({
          open: true,
          message: res.data.message,
          severity: "success",
        })
      );
    })
    .catch((err) => {
      if (err.response) {
        dispatch(
          setSnackData({
            open: true,
            message: err.response.data.message,
            severity: "error",
          })
        );
      }
      setIsLoading(false);
    });
};

export const signIn = (data, setIsLoading) => (dispatch) => {
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`, data)
    .then((res) => {
      dispatch({
        type: LOG_IN,
        payload: res.data.userData,
      });

      localStorage.setItem(
        import.meta.env.VITE_LOCALSTORAGE_KEY,
        JSON.stringify(res.data.userData)
      );

      let userTheme = JSON.parse(
        localStorage.getItem(
          `${import.meta.env.VITE_LOCALSTORAGE_KEY.toLowerCase()}-dark-theme-${
            res.data.userData.userId
          }`
        )
      );

      dispatch(setTheme(userTheme.dark));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(
          setSnackData({
            open: true,
            message: err.response.data.message,
            severity: "error",
          })
        );
      }
      if (setIsLoading) setIsLoading(false);
    });
};
