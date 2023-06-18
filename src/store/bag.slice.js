import { createSlice } from '@reduxjs/toolkit'
import { deleteEl } from '../assets/scripts/script'

export const bagSlice = createSlice({
	name: 'bag',
	initialState: [],
	reducers: {
		addToBag: (state, action) => {
			if (!state.some(el => el.id === action.payload.id)) {
				// action.payload - элемент на добавление
				state.push(action.payload)
			}
		},

		removeFromBag: (state, action) => {
			state = state.filter(prod => prod.id !== action.payload.id)
		},
	},
})
