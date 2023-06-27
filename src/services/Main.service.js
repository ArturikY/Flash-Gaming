import axios from 'axios'

export const MainService = {
	async getPlayers() {
		try {
			const response = await axios.get(`/api/club/team/`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},
}

// http://localhost:4400/players
