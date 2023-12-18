"use client"

import { createSelector, createSlice } from "@reduxjs/toolkit";
import words from "../../words.json";
import { RootState } from "../store";

export const wordleSlice = createSlice({
  name: "wordle",
  initialState: {
    targetWord: "",
    inputWords: new Array(6).fill(""),
    currentIndex: 0,
  },
  reducers: {
    newGame: (state) => {
      state.targetWord = words[Math.round(Math.random() * words.length)];
      state.inputWords = new Array(6).fill("");
      state.currentIndex = 0;
    },
    submitWord: (state) => {
      state.currentIndex += words.includes(state.inputWords[state.currentIndex])
        ? 1
        : 0;
    },
    handleKeyUp: (state, action) => {
      const won =
        state.currentIndex > 0 &&
        state.inputWords[state.currentIndex - 1] === state.targetWord;
      const lost = state.currentIndex >= 6;

      if (true) {
        if (action.payload === "Enter") {
          state.currentIndex += 1;
        } else if (
          action.payload === "Backspace" &&
          state.inputWords[state.currentIndex].length > 0
        ) {
          state.inputWords[state.currentIndex] = state.inputWords[
            state.currentIndex
          ].slice(0, -1);
        } else if (
          state.inputWords[state.currentIndex].length < 5 &&
          action.payload.match(/^[A-z]$/)
        ) {
          state.inputWords[state.currentIndex] += action.payload.toLowerCase();
        }
      }
    },
  },
});

const wordleReducer = wordleSlice.reducer;

export const selectTargetWord = (state: RootState) => state.wordle.targetWord;
export const selectInputWords = (state: RootState) => state.wordle.inputWords;
export const selectCurrentIndex = (state: RootState) => state.wordle.currentIndex;

export const selectLost = createSelector(
  selectCurrentIndex,
  (index) => index >= 6
);

export const selectWon = createSelector(
  [selectTargetWord, selectInputWords, selectCurrentIndex],
  (targetWord, inputWords, currentIndex) =>
    currentIndex > 0 && inputWords[currentIndex - 1] === targetWord
);

export const { newGame, submitWord, handleKeyUp } = wordleSlice.actions

export default wordleReducer;
