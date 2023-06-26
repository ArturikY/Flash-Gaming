import axios from 'axios'
import { HOST } from '../assets/scripts/script.js'

export const NewsService = {
	async getAll() {
		// Change URL and add HOST
		const response = await axios.get('/api/news/')

		return response.data
	},
}

// http://localhost:4400/news
