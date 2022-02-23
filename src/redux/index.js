import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import arrayReducer from "./arrayReducer";

const rootReducer = combineReducers({
  arrayReducer: arrayReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
