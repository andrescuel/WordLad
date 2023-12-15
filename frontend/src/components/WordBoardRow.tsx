import WordBoardGrid from "./WordBoardGrid"

interface IRowProps {
    isGuessed: boolean
    inputWord: string
    targetWord: string
}

export default function WordBoardRow(props: IRowProps) {
    return (
        <div className="grid grid-cols-5 gap-2 mb-2">
            {
                new Array(5).fill(0).map((_, i) => {
                    const bgColor = !props.isGuessed 
                    ? 'bg-transparent'
                    : props.inputWord[i] === props.targetWord[i] 
                    ? 'bg-green-600'
                    : props.targetWord.includes(props.inputWord[i])
                    ? 'bg-yellow-500'
                    : 'bg-gray-700'

                    const borderColor = !props.isGuessed
                    ? 'border-gray-700'
                    : 'border-black'

                    return WordBoardGrid(props.inputWord[i], bgColor, borderColor)
                })
            }
        </div>
    )
}