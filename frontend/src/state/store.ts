"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coreReducer from "./core/coreSlice";
import wordleReducer from "./games/wordleSlice";

export const rootReducer = combineReducers({
  wordle: wordleReducer,
  core: coreReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
