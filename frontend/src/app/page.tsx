import Image from 'next/image'
import Keyboard from '../components/Keyboard'
import WordLadderBoard from '../components/WordLadderBoard'
import store from '../store'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500">WordLad</h1>
      <WordLadderBoard/>
      <h1>Won/loss</h1>
      <Keyboard/>
    </main>
  )
}
