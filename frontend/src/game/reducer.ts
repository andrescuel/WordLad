import { IAction } from "./actions"
import { selectLost, selectWon } from "./selectors"
import words from "../words.json"

export interface IGameState {
    targetWord: string
    inputWords: string[]
    currentIndex: number
}

const initialState: IGameState = {
    targetWord: '',
    inputWords: [],
    currentIndex: 0,
}

const gameReducer = (state = initialState, action: IAction): IGameState => {
    const { inputWords, currentIndex } = state;

    switch (action.type) {
        case 'START_GAME':
          return {
            targetWord: words[Math.round(Math.random() * words.length)],
            inputWords: new Array(6).fill(''),
            currentIndex: 0,
          }
    
        case 'SUBMIT_GUESS':
          return {
            ...state,
            currentIndex: currentIndex + (words.includes(state.inputWords[state.currentIndex]) ? 1 : 0),
          };
    
        case 'HANDLE_KEYUP':
          if (currentIndex < 6 && !selectWon(state) && !selectLost(state)) {
            if (action.payload === 'Enter') {
              return {
                ...state,
                currentIndex: currentIndex + 1,
              };
            }
    
            if (action.payload === 'Backspace' && inputWords[currentIndex].length > 0) {
              const newInputWords = [...inputWords];
              newInputWords[currentIndex] = newInputWords[currentIndex].slice(0, -1);
    
              return {
                ...state,
                inputWords: newInputWords,
              };
            }
    
            if (
              inputWords[currentIndex].length < 5 &&
              (action.payload as string).match(/^[A-z]$/)
            ) {
              const newInputWords = [...inputWords];
              newInputWords[currentIndex] += (action.payload as string).toLowerCase();
    
              return {
                ...state,
                inputWords: newInputWords,
              };
            }
          }
    
          return state
    
        default:
          return state
      }
}

export default gameReducer