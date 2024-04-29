import {
  GET_NOTES,
  POST_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
} from "../Action/actionTypes";

const initialState = { notes: [] };

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };

    case POST_NOTE:
      return {
        ...state,
        notes: action.payload,
      };

    case EDIT_NOTE:
      return {
        ...state,
        notes: action.payload,
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: action.payload,
      };

    default:
      return state;
  }
};

export default notesReducer;
