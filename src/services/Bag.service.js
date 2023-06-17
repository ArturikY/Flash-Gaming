import axios from 'axios'
import { HOST } from '../assets/scripts/script.js'

export const BagService = {
	async sendData(listProducts, form) {
		// Change URL and add HOST
		const response = await axios.post(`/api/shop/purchase/`, {
			products: listProducts,
			name: form.name,
			email: form.email,
			comment: form.comment,
		})

		return response.data
	},
}
