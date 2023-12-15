'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import gameReducer from './game/reducer'

export const rootReducer = combineReducers({
    game: gameReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type IRootState = ReturnType<typeof rootReducer>

export default store