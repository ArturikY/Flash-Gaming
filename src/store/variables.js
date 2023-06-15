import { combineReducers } from 'redux'
import { bagSlice } from './bag.slice'

// все reducers
export const reducers = combineReducers({
	bag: bagSlice.reducer,
})

// все actions
export const rootActions = {
	...bagSlice.actions,
}
