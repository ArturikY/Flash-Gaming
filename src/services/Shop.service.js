import axios from 'axios'

export const ShopService = {
	async getAll() {
		try {
			const response = await axios.get(`/api/shop/`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},
}

// http://localhost:4400/shop
