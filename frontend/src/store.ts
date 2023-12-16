"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wordleReducer from "./games/wordle/reducer";

export const rootReducer = combineReducers({
  wordle: wordleReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
