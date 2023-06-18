import axios from 'axios'

export const ShopService = {
	async getAll() {
		const response = await axios.get(`/api/shop/`)

		return response.data
	},
}

// http://localhost:4400/shop
