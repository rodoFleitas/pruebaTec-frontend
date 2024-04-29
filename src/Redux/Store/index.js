import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "../Reducer/userReducer";
import notesReducer from "../Reducer/notesReducer";

const composeEnhancer = compose;

const store = createStore(
  combineReducers({
    user: userReducer,
    notes: notesReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
