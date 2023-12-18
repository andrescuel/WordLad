import Keyboard from "@/components/games/Keyboard";
import WordleBoard from "@/components/games/wordle/WordleBoard";

export default function Wordle() {
  return (
    <main className="flex min-h-full flex-col items-center">
        <WordleBoard/>
        <h1>Won/loss</h1>
        <Keyboard/>
    </main>
  )
}
