import { SET_THEME } from "./actionTypes";

export const setTheme = (value) => (dispatch, getState) => {
  let { userData } = getState().user;

  if (userData) {
    localStorage.setItem(
      `${import.meta.env.VITE_LOCALSTORAGE_KEY.toLowerCase()}-dark-theme-${
        userData.userId
      }`,
      JSON.stringify({ dark: value })
    );
  }

  dispatch({
    type: SET_THEME,
    payload: value,
  });
};
