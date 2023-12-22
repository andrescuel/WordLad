"use client";

import WordleRow from "./WordleRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleKeyUp,
  newGame,
  selectCurrentIndex,
  selectInputWords,
  selectTargetWord,
  submitWord,
} from "@/state/games/wordleSlice";

export default function WordleBoard() {
  const dispatch = useDispatch();
  const targetWord = useSelector(selectTargetWord);
  const inputWords = useSelector(selectInputWords);
  const currentIndex = useSelector(selectCurrentIndex);

  useEffect(() => {
    dispatch(newGame());

    const handleKeyUpListener = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        dispatch(submitWord());
      } else {
        dispatch(handleKeyUp(event.key));
      }
    };

    window.addEventListener("keyup", handleKeyUpListener);

    return () => {
      window.removeEventListener("keyup", handleKeyUpListener);
    };
  }, [dispatch]);

  console.log(targetWord);
  return (
    <div className="grid grid-rows-5 gap-1.5 p-5">
      {inputWords.map((_, i) => (
        <WordleRow
          key={i}
          targetWord={targetWord}
          inputWord={inputWords[i]}
          isGuessed={i < currentIndex}
        />
      ))}
    </div>
  );
}
