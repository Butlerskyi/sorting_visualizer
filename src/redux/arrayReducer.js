import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  array: [],
};

export const addArray = createAction("addArray");

export default createReducer(initialState, {
  [addArray]: (state, action) => {
    state.array = action.payload;
  },
});
