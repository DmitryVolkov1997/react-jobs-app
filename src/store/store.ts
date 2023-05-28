import {combineReducers, configureStore} from '@reduxjs/toolkit'
import jobReducer from 'store/slices/jobSlice'

const rootReducer = combineReducers({
	jobs: jobReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

