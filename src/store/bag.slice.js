import { createSlice } from '@reduxjs/toolkit'

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
			const indexEl = state.indexOf(action.payload)
			state.splice(indexEl, 1)
		},
	},
})
