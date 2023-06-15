import axios from 'axios'
import { HOST } from '../assets/scripts/script.js'

export const NewsService = {
	async getAll() {
		// Change URL and add HOST
		const response = await axios.get(`http://localhost:4400/news`)

		return response.data
	},
}
