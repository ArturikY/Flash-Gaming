import { useState } from 'react'
import { Form } from '../form/Form'
import { Purchase } from '../purchase/Purchase'
import styles from './Bag.module.scss'

export const Bag = () => {
	const [count, setCount] = useState(1)

	return (
		<div className={styles.wrapper}>
			<Purchase count={count} setCount={setCount} />
			<Form />
		</div>
	)
}
