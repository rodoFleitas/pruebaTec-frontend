import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "../Reducer/userReducer";
import notesReducer from "../Reducer/notesReducer";
import snackDataReducer from "../Reducer/snackDataReducer";
import themeReducer from "../Reducer/themeReducer";

const composeEnhancer = compose;

const store = createStore(
  combineReducers({
    user: userReducer,
    darkTheme: themeReducer,
    notes: notesReducer,
    snackData: snackDataReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
