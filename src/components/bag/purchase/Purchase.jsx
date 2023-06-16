import styles from './Purchase.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useBag } from '../../../hooks/useBag'
import { useEffect, useState } from 'react'
import { makeNewList } from '../../../assets/scripts/script'
import { Goods } from '../goods/Goods'

export const Purchase = ({ listProducts, setListProducts }) => {
	return (
		<div className={styles.purchase}>
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
		</div>
	)
}
