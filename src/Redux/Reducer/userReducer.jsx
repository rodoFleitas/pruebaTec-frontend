import { LOG_IN, LOG_OUT } from "../Action/actionTypes";

const initialState = () => {
  let userData = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_LOCALSTORAGE_KEY) || null
  );

  return {
    userData,
  };
};

export const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userData: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
