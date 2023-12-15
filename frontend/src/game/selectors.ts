import { IGameState } from "./reducer";

export const selectTargetWord = (state: IGameState) => state.targetWord;
export const selectInputWords = (state: IGameState) => state.inputWords;
export const selectCurrentIndex = (state: IGameState) => state.currentIndex;

export const selectWon = (state: IGameState) => {
  const targetWord = selectTargetWord(state);
  const inputWords = selectInputWords(state);
  const currentIndex = selectCurrentIndex(state);

  return currentIndex > 0 && inputWords[currentIndex - 1] === targetWord;
};

export const selectLost = (state: IGameState) => selectCurrentIndex(state) === 6;