import styles from './Purchase.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { BsTrashFill } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export const Purchase = () => {
	return (
		<div className={styles.purchase}>
			<div className={styles.back}>
				<IoIosArrowBack />
			</div>
			<div className='main__container'>
				<div className={styles.product}>
					<div
						className={styles.image}
						style={{
							backgroundImage:
								'url("https://phonoteka.org/uploads/posts/2021-04/thumbs/1619251899_47-phonoteka_org-p-poluprozrachnii-chernii-fon-52.png")',
						}}
					/>
					<div className={styles.text}>
						<div className={styles.important}>
							<div className={styles.title}>30 гемов</div>
							<div className={styles.price}>300 рублей</div>
						</div>
						<div className={styles.description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
							consectetur accusamus amet vel assumenda sapiente voluptas velit
							minus quis itaque!
						</div>
					</div>
					<div className={styles.backend}>
						<div className={styles.delete}>
							<BsTrashFill />
						</div>
						<div className={styles.tuning}>
							<div className={styles.minus}>
								<AiOutlineMinus />
							</div>
							<div className={styles.count}>1</div>
							<div className={styles.plus}>
								<AiOutlinePlus />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
