import axios from 'axios'
import { HOST } from '../assets/scripts/script.js'

export const EventsService = {
	async getAll() {
		// Change URL
		const response = await axios.get('http://localhost:4400/events')

		return response.data
	},
}

// http://localhost:4400/events
