import axios from 'axios'

export const EventsService = {
	async getAll() {
		try {
			const response = await axios.get('/api/events/')
			return response.data
		} catch (error) {
			console.log(error)
		}
	},
}

// http://localhost:4400/events
