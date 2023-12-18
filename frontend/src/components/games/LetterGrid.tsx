export default function WordBoardGrid(letter: string, bgColor: string, borderColor: string) {
    return (
        <div className={`flex h-14 w-14 items-center justify-center border ${borderColor} font-bold uppercase text-white text-3xl ${bgColor}`}>
            {letter}
        </div>
    )
}