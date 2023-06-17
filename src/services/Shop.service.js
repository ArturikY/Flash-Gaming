import axios from 'axios'
import { HOST } from '../assets/scripts/script.js'

export const ShopService = {
	async getAll() {
		// Change URL and add HOST
		const response = await axios.get(`/api/shop/`)

		return response.data
	},
}

/* 
[
  {
    cat: 'name_cat',
    products: [{
      
    }]
  }
]
*/
// http://localhost:4400/shop
