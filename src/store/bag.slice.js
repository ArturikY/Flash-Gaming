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
			const index = state.findIndex(item => item.id === action.payload.id)
			if (index !== -1) {
				state.splice(index, 1)
			}
		},
	},
})
