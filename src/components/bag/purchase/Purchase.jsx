import styles from './Purchase.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { BsTrashFill } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useBag } from '../../../hooks/useBag'
import { useActions } from '../../../hooks/useActions'
import { useState } from 'react'

export const Purchase = ({ count, setCount }) => {
	const bag = useBag()

	const { removeFromBag } = useActions()

	// ([...{...bag, count: 1}])

	const [listProducts, setListProducts] = useState([])

	// setListProducts([...{ ...bag, count: 1 }])

	// for (const prod of bag) {
	// 	setListProducts(prev => [...prev, { ...prod, count: 1 }])
	// }

	console.log(listProducts)

	return (
		<div className={styles.purchase}>
			<Link to='/shop' className={styles.back}>
				<IoIosArrowBack />
			</Link>
			<div className='main__container'>
				<h1>Корзина</h1>
				{bag.map(product => (
					<div key={product.id} className={styles.product}>
						<div
							className={styles.image}
							style={{
								backgroundImage: `url("${product.image}")`,
							}}
						/>
						<div className={styles.text}>
							<div className={styles.important}>
								<div className={styles.title}>{product.title}</div>
								<div className={styles.price}>{product.price}</div>
							</div>
							<div className={styles.description}>{product.description}</div>
						</div>
						<div className={styles.backend}>
							<div
								onClick={() => removeFromBag(product)}
								className={styles.delete}
							>
								<BsTrashFill />
							</div>
							<div className={styles.tuning}>
								<div
									onClick={() => {
										if (count > 1) {
											setCount(prev => prev - 1)
										}
									}}
									className={styles.minus}
								>
									<AiOutlineMinus />
								</div>
								<div className={styles.count}>{count}</div>
								<div
									onClick={() => {
										setCount(prev => prev + 1)
									}}
									className={styles.plus}
								>
									<AiOutlinePlus />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
