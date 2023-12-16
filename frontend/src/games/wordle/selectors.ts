import { WordleState } from "./reducer";

export const selectTargetWord = (state: WordleState) => state.targetWord;
export const selectInputWords = (state: WordleState) => state.inputWords;
export const selectCurrentIndex = (state: WordleState) => state.currentIndex;

export const selectWon = (state: WordleState) => {
  const targetWord = selectTargetWord(state);
  const inputWords = selectInputWords(state);
  const currentIndex = selectCurrentIndex(state);

  return currentIndex > 0 && inputWords[currentIndex - 1] === targetWord;
};

export const selectLost = (state: WordleState) =>
  selectCurrentIndex(state) === 6;
