import Keyboard from "../components/games/Keyboard";
import WordLadderBoard from "../components/games/wordle/WordleBoard";
import { useDispatch, useSelector } from "react-redux";
import { selectLost, selectWon } from "@/state/games/wordle/selectors";
import { RootState } from "@/state/store";
import { useEffect } from "react";
import { handleKeyup, startGame } from "@/state/games/actions";
import Navbar from "@/components/core/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Won/loss</h1>
      <Keyboard />
    </main>
  );
}
