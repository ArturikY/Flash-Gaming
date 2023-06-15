import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './variables'

export const store = configureStore({
	reducer: reducers,
})
