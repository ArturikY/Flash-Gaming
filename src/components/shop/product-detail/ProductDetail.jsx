import { useActions } from '../../../hooks/useActions'
import { useBag } from '../../../hooks/useBag'
import styles from './ProductDetail.module.scss'

export const ProductDetail = ({ detail }) => {
	const bag = useBag()

	const { addToBag, removeFromBag } = useActions()

	const isExist = bag.some(prod => prod === detail)

	return (
		<div className={styles.productDetail}>
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles.image} />
					<div className={styles.text}>
						<div className={styles.title}>{detail.title}</div>
						<div className={styles.price}>{detail.price}</div>
						<div className={styles.description}>{detail.description}</div>
						<div
							onClick={() => {
								isExist ? removeFromBag(detail) : addToBag(detail)
							}}
							className={styles.btn_addBag}
						>
							{isExist ? 'Remove ' : 'Add'} bag
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
