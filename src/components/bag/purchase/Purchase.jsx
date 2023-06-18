import styles from './Purchase.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useBag } from '../../../hooks/useBag'
import { useEffect, useState } from 'react'
import { makeNewList } from '../../../assets/scripts/script'
import { Goods } from '../goods/Goods'
import { motion } from 'framer-motion'

export const Purchase = ({ listProducts, setListProducts }) => {
	return (
		<motion.div
			className={styles.purchase}
			initial={{
				y: -50,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
			}}
		>
			<Link to='/shop' className={styles.back}>
				<IoIosArrowBack />
			</Link>
			<div className='main__container'>
				<h1>Корзина</h1>
				{listProducts.map(product => (
					<Goods
						key={product.id}
						product={product}
						listProducts={listProducts}
						setListProducts={setListProducts}
					/>
				))}
			</div>
		</motion.div>
	)
}
