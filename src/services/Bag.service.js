import axios from 'axios'

export const BagService = {
	async sendData(listProducts, form) {
		try {
			const response = await axios.post(`/api/shop/purchase/`, {
				products: listProducts,
				name: form.name,
				email: form.email,
				comment: form.comment,
			})
			return response.data
		} catch (error) {
			console.log(error)
		}
	},
}
