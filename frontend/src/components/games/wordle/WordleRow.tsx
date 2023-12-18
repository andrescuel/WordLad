import LetterGrid from "../LetterGrid"

interface IRowProps {
    isGuessed: boolean
    inputWord: string
    targetWord: string
}

const gridsBgColor = (inputWord: string, targetWord: string): string[] => {
    const bgColors = new Array(5).fill('')
    const targetChars = targetWord.split('');

    for(let i = 0; i < inputWord.length; i++) {
        if(inputWord[i] === targetChars[i]) {
            bgColors[i] = 'bg-green-600'
            targetChars[i] = ' '
        }
    }

    for(let i = 0; i < inputWord.length; i++) {
        if(bgColors[i] === '' && targetChars.includes(inputWord[i])) {
            bgColors[i] = 'bg-yellow-500'
            const index = targetChars.indexOf(inputWord[i])
            targetChars[index] = ' '
        }
        else if (bgColors[i] === '') {
            bgColors[i] = 'bg-gray-700'
        }
    }

    return bgColors
}

export default function WordleRow(props: IRowProps) {
    const bgColors = gridsBgColor(props.inputWord, props.targetWord)
    return (
        <div className="grid grid-cols-5 gap-1.5">
            {
                new Array(5).fill(0).map((_, i) => {
                    const bgColor = !props.isGuessed
                    ? 'bg-transparent'
                    : bgColors[i]

                    const borderColor = !props.isGuessed
                    ? 'border-zinc-800'
                    : 'border-black'

                    return LetterGrid(props.inputWord[i], bgColor, borderColor)
                })
            }
        </div>
    )
}