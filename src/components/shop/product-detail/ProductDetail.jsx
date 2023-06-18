import { useActions } from '../../../hooks/useActions'
import { useBag } from '../../../hooks/useBag'
import styles from './ProductDetail.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { BagLink } from '../bag-link/BagLink.jsx'
import { motion } from 'framer-motion'

export const ProductDetail = ({ detail, setOpen }) => {
	const bag = useBag()

	const { addToBag, removeFromBag } = useActions()

	const isExist = bag.some(prod => prod === detail)

	return (
		<div className={styles.productDetail}>
			<div className={styles.header}>
				<div onClick={() => setOpen(false)} className={styles.back}>
					<IoIosArrowBack />
				</div>
				<div className={styles.logo}>
					<BagLink />
				</div>
			</div>
			<div className='main__container'>
				<motion.div
					className={styles.content}
					initial={{
						y: -50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
					}}
				>
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
				</motion.div>
			</div>
		</div>
	)
}
