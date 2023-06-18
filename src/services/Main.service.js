import axios from 'axios'

export const MainService = {
	async getPlayers() {
		const response = await axios.get(`/api/club/team/`)

		return response.data
	},
}

// http://localhost:4400/players
