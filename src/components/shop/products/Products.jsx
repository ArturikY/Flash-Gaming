import { Product } from '../product/Product'
import styles from './Products.module.scss'
import { useEffect, useState } from 'react'
import { ShopService } from '../../../services/Shop.service'

export const Products = ({ setOpenDetail, setDetail }) => {
	const [listProducts, setListProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			const data = await ShopService.getAll()

			setListProducts(data)
		}

		getProducts()
	}, [])

	return (
		<div className={styles.products}>
			<div className='main__container'>
				<div className={styles.logo} />
				<div class={styles.title}>
					<hr className={styles.line} />
					<h2>Магазин</h2>
					<hr className={styles.line} />
				</div>
				<div className={styles.listProducts}>
					{listProducts.map((data, index) => (
						<div key={index}>
							<h2 className={styles.category}>{data.category}</h2>
							<div className={styles.section}>
								{data.products.map((product, index) => (
									<Product
										product={product}
										key={index}
										setOpenDetail={setOpenDetail}
										setDetail={setDetail}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
