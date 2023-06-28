import axios from 'axios'

export const NewsService = {
	async getAll() {
		try {
			const response = await axios.get('/api/news/')
			return response.data
		} catch (error) {
			console.log(error)
		}
	},
}

// http://localhost:4400/news
