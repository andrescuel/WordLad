export interface IAction {
    type: string
    [key: string]: any;
}

export const startGame = (): IAction => ({
    type: 'START_GAME',
})

export const submitGuess = (): IAction => ({
    type: 'SUBMIT_GUESS',
})

export const handleKeyup = (key: string): IAction => ({
    type: 'HANDLE_KEYUP',
    payload: key,
})