'use client';

import WordleRow from "./WordleRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { selectLost, selectWon } from "@/games/wordle/selectors";
import { handleKeyup, startGame } from "@/games/actions";

export default function WordleBoard() {
    const dispatch = useDispatch() 
    const { targetWord, inputWords, currentIndex } = useSelector((state: RootState) => state.wordle)
    const won = useSelector(selectWon)
    const lost = useSelector(selectLost)

    useEffect(() => {
        dispatch(startGame());

        const handleKeyUpListener = (event: KeyboardEvent) => {
            dispatch(handleKeyup(event.key));
        };

        window.addEventListener('keyup', handleKeyUpListener);

        return () => {
        window.removeEventListener('keyup', handleKeyUpListener);
        };
    }, [dispatch]);

    return (
        <div>
             {
                inputWords.map((_, i) => (
                    <WordleRow
                    key={i}
                    targetWord={targetWord}
                    inputWord={inputWords[i]}
                    isGuessed={i < currentIndex}
                    />
                ))
             }
        </div>
    )
}