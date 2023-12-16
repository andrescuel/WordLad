import Keyboard from '../components/games/Keyboard'
import WordLadderBoard from '../components/games/wordle/WordleBoard'
import { useDispatch, useSelector } from 'react-redux'
import { selectLost, selectWon } from '@/games/wordle/selectors'
import { RootState } from '@/store';
import { useEffect } from 'react';
import { handleKeyup, startGame } from '@/games/actions';

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500">WordLad</h1>
      <h1>Won/loss</h1>
      <Keyboard/>
    </main>
  )
}
