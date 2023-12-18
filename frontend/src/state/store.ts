"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wordleReducer from "./games/wordle/reducer";
import coreReducer from "./core/reducer";

export const rootReducer = combineReducers({
  wordle: wordleReducer,
  core: coreReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
