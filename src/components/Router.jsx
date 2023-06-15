import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Main } from './main/Main/Main.jsx'
import { News } from './news/News/News.jsx'
import { Shop } from './shop/Shop/Shop.jsx'
import { Club } from './club/Club/Club.jsx'
import { Events } from './events/Events/Events.jsx'
import { Bag } from './bag/Bag/Bag.jsx'
import { ProductDetail } from './shop/product-detail/ProductDetail.jsx'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Main />} path='/main' />
				<Route element={<Club />} path='/club' />
				<Route element={<Shop />} path='/shop' />
				<Route element={<News />} path='/news' />
				<Route element={<Events />} path='/events' />
				<Route element={<ProductDetail />} path='/product/:id' />
				<Route element={<Bag />} path='/bag' />
				<Route path='*' element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
