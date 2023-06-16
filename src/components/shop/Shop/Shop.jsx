import { useState } from 'react'
import { Header } from '../../header/Header'
import { BagLink } from '../bag-link/BagLink'
import { Products } from '../products/Products'
import styles from './Shop.module.scss'
import { ProductDetail } from '../product-detail/ProductDetail'

export const Shop = () => {
	const [openDetail, setOpenDetail] = useState(false)
	const [detailProduct, setDetailProduct] = useState({})

	return !openDetail ? (
		<div className={styles.wrapper}>
			<Header />
			<div style={{ margin: '10px 5px 0 auto', width: '100px' }}>
				<BagLink />
			</div>
			<Products setOpenDetail={setOpenDetail} setDetail={setDetailProduct} />
		</div>
	) : (
		<ProductDetail
			detail={detailProduct}
			setDetail={setDetailProduct}
			setOpen={setOpenDetail}
		/>
	)
}
