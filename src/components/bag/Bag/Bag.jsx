import { Form } from '../form/Form'
import { Purchase } from '../purchase/Purchase'
import styles from './Bag.module.scss'

export const Bag = () => {
	return (
		<div className={styles.wrapper}>
			<Purchase />
			<Form />
		</div>
	)
}
