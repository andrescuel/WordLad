import WordBoardGrid from "./WordBoardGrid"

interface RowProps {
    isGuessed: boolean
    guess: string
    word: string
}

export default function WordBoardRow(props: RowProps) {
    return (
        <div className="grid grid-cols-5 gap-2 mb-2">
            {
                new Array(5).fill(0).map((_, i) => {
                    const bgColor = !props.isGuessed 
                    ? 'bg-transparent'
                    : props.guess[i] === props.word[i] 
                    ? 'bg-green-600'
                    : props.word.includes(props.guess[i])
                    ? 'bg-yellow-500'
                    : 'bg-gray-700'

                    const borderColor = !props.isGuessed
                    ? 'border-gray-700'
                    : 'border-black'

                    return WordBoardGrid(props.guess[i], bgColor, borderColor)
                })
            }
        </div>
    )
}