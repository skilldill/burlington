import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from "./reducer";

// Thunk function
export const actionFn = ({ dispatch, getState }) => (next) => (action) => {
  return action instanceof Function ? action(dispatch, getState) : next(action);
};

export const middlewares = composeWithDevTools(applyMiddleware(actionFn));

export const store = createStore(reducer, middlewares);