'use client';

import Keyboard from '../components/Keyboard'
import WordLadderBoard from '../components/WordLadderBoard'
import { useDispatch, useSelector } from 'react-redux'
import { selectLost, selectWon } from '@/game/selectors'
import { IRootState } from '@/store';
import { useEffect } from 'react';
import { handleKeyup, startGame } from '@/game/actions';

export default function Home() {
  const dispatch = useDispatch() 
  const { targetWord, inputWords, currentIndex } = useSelector((state: IRootState) => state.game)
  const won = useSelector(selectWon)
  const lost = useSelector(selectLost)

  useEffect(() => {
    dispatch(startGame());

    const handleKeyUpListener = (event) => {
      dispatch(handleKeyup(event.key));
    };

    window.addEventListener('keyup', handleKeyUpListener);

    return () => {
      window.removeEventListener('keyup', handleKeyUpListener);
    };
  }, [dispatch]);

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500">WordLad</h1>
      <WordLadderBoard inputWords={inputWords} targetWord={targetWord} currentIndex={currentIndex} />
      <h1>Won/loss</h1>
      <Keyboard/>
    </main>
  )
}
