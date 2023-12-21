import Keyboard from "@/components/games/Keyboard";
import WordleBoard from "@/components/games/wordle/WordleBoard";
import WordleModal from "@/components/games/wordle/WordleModal";

export default function Wordle() {
  return (
    <main className="flex min-h-full flex-col items-center">
        <WordleBoard/>
        <WordleModal/>
        <Keyboard/>
    </main>
  )
}
