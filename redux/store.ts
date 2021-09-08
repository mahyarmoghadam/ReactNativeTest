import { combineReducers, configureStore } from "@reduxjs/toolkit";
import randomNumberSlice from "./randomNumberSlice";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const reducer = combineReducers({
  randomNumber: randomNumberSlice,
});

export const store = configureStore({
  reducer,
  enhancers: [middlewareEnhancer],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
