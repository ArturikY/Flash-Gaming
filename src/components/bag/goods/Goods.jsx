import styles from './Goods.module.scss'
import { BsTrashFill } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'
import { deleteEl } from '../../../assets/scripts/script'
import { useActions } from '../../../hooks/useActions.js'

export const Goods = ({ product, listProducts, setListProducts }) => {
	const [count, setCount] = useState(product.quantity)

	const { removeFromBag } = useActions()

	return (
		<div className={styles.product}>
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
					onClick={() => {
						removeFromBag(product)
						deleteEl(listProducts, product)
						setListProducts([...listProducts])
					}}
					className={styles.delete}
				>
					<BsTrashFill />
				</div>
				<div className={styles.tuning}>
					<div
						onClick={() => {
							if (count > 1) {
								setCount(prev => prev - 1)
								product.count = count
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
							product.count = count
						}}
						className={styles.plus}
					>
						<AiOutlinePlus />
					</div>
				</div>
			</div>
		</div>
	)
}
