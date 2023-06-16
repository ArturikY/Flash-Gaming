import { useState } from 'react'
import { Form } from '../form/Form'
import { Purchase } from '../purchase/Purchase'
import styles from './Bag.module.scss'

export const Bag = () => {
	const bag = useBag()

	const [listProducts, setListProducts] = useState([])

	useEffect(() => {
		setListProducts(makeNewList(bag))
	}, [])

	return (
		<div className={styles.wrapper}>
			<Purchase listProducts={listProducts} setListProducts={setListProducts} />
			<Form listProducts={listProducts} setListProducts={setListProducts} />
		</div>
	)
}
