import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "../Action/actionTypes";

const initialState = {
  snackData: {
    open: false,
    message: "",
    severity: "info",
    vertical: "bottom",
    horizontal: "center",
  },
};

export const snackDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return {
        snackData: { ...state.snackData, ...action.payload },
      };
    case CLOSE_SNACKBAR:
      return {
        snackData: { ...state.snackData, ...action.payload },
      };
    default:
      return state;
  }
};

export default snackDataReducer;
