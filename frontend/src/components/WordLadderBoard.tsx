import { IGameState } from "@/game/reducer";
import WordBoardRow from "./WordBoardRow";

export default function WordLadderBoard(props: IGameState) {
    return (
        <div>
             {
                props.inputWords.map((_, i) => (
                    <WordBoardRow
                    key={i}
                    targetWord={props.targetWord}
                    inputWord={props.inputWords[i]}
                    isGuessed={i < props.currentIndex}
                    />
                ))
             }
        </div>
    )
}