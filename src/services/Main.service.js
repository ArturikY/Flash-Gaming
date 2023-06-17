import axios from 'axios'
import { HOST } from '../assets/scripts/script.js'

export const MainService = {
	async getPlayers() {
		// Change URL and add HOST
		const response = await axios.get(`http://localhost:4400/players`)

		return response.data
	},
}

// http://localhost:4400/players
