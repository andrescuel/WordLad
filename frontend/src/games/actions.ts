export interface IAction {
    type: string
    [key: string]: any;
}

export const startGame = (): IAction => ({
    type: 'START_GAME',
})

export const submitWord = (): IAction => ({
    type: 'SUBMIT_WORD',
})

export const handleKeyup = (key: string): IAction => ({
    type: 'HANDLE_KEYUP',
    payload: key,
})