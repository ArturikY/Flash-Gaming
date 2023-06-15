import styles from './BagLink.module.scss'
import { BsFillBasketFill } from 'react-icons/bs'
import { useBag } from '../../../hooks/useBag.js'
import { Link } from 'react-router-dom'

export const BagLink = () => {
	const bag = useBag()

	return (
		<div className={styles.bagLink}>
			<div className={styles.content}>
				<div className={styles.count}>{bag.length}</div>
				<Link path='#' className={styles.logo}>
					<BsFillBasketFill />
				</Link>
			</div>
		</div>
	)
}
