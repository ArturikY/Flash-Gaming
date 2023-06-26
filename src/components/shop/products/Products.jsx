import { Product } from '../product/Product'
import styles from './Products.module.scss'
import { useEffect, useState } from 'react'
import { ShopService } from '../../../services/Shop.service'
import { motion } from 'framer-motion'
import { VscRuby } from 'react-icons/vsc'

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
				<motion.div
					className={styles.menu}
					initial={{
						y: -50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.3,
					}}
				>
					<div className={styles.logo}>
						<VscRuby />
					</div>
					<div class={styles.title}>
						<hr className={styles.line} />
						<h2>Магазин</h2>
						<hr className={styles.line} />
					</div>
				</motion.div>
				<motion.div
					className={styles.listProducts}
					initial={{
						y: 50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
				>
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
				</motion.div>
			</div>
		</div>
	)
}
