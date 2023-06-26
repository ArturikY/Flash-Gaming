import styles from './Preview.module.scss'
import { motion } from 'framer-motion'

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className='main__container'>
				<motion.div
					className={styles.text}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.6,
					}}
				>
					<h5>Клуб</h5>
					<p>Здесь мы подробнее расскажем вам историю нашего клуба</p>
				</motion.div>
			</div>
		</div>
	)
}
