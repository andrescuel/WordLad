import WordBoardRow from "./WordBoardRow";

export default function WordLadderBoard() {
    return (
        <div>
            <WordBoardRow isGuessed={false} guess={"Holas"} word={"Malok"} />
            <WordBoardRow isGuessed={true} guess={"Holas"} word={"Malok"} />
        </div>
    )
}