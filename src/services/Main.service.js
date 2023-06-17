import axios from 'axios'
import { HOST } from '../assets/scripts/script.js'

export const MainService = {
	async getPlayers() {
		// Change URL and add HOST
		const response = await axios.get(`/api/club/team/`)

		return response.data
	},
}

// http://localhost:4400/players
