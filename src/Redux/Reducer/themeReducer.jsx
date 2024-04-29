import { SET_THEME } from "../Action/actionTypes";

const initialState = () => {
  let dataTheme = { dark: true };

  let aux = null;

  let userData = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_LOCALSTORAGE_KEY) || null
  );

  if (userData) {
    aux = JSON.parse(
      localStorage.getItem(
        `${import.meta.env.VITE_LOCALSTORAGE_KEY.toLowerCase()}-dark-theme-${
          userData.userId
        }`
      )
    );
  }

  if (!aux) {
    return dataTheme;
  } else {
    return aux;
  }
};

export const themeReducer = (state = initialState(), action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        dark: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
