import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "./actionTypes";

export const setSnackData = (data) => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR,
    payload: data,
  });
};

export const resetSnackData = (data) => (dispatch) => {
  dispatch({
    type: CLOSE_SNACKBAR,
    payload: data,
  });
};
