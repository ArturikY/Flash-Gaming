import { Link } from 'react-router-dom'
import styles from './Product.module.scss'
import { useActions } from '../../../hooks/useActions'
import { useBag } from '../../../hooks/useBag'

export const Product = ({ product, setOpenDetail, setDetail }) => {
	const bag = useBag()

	const { addToBag, removeFromBag } = useActions()

	const isExist = bag.some(prod => prod.id === product.id)

	console.log(bag)

	return (
		<div className={styles.good}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${product.image})` }}
			/>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>{product.price}</div>
			<div className={styles.short_desc}>{product.short_description}</div>
			<div
				onClick={() => {
					setOpenDetail(true)
					setDetail(product)
				}}
				className={styles.readMore}
			>
				Read more
			</div>
			<div
				onClick={() => {
					isExist ? removeFromBag(product) : addToBag(product)
					console.log(product)
				}}
				className={styles.btn_addBag}
			>
				{isExist ? 'Remove ' : 'Add'} bag
			</div>
		</div>
	)
}
