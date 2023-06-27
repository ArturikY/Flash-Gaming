import { useEffect, useState } from 'react'
import { New } from '../new/New'
import styles from './Article.module.scss'
import { NewsService } from '../../../services/News.service.js'
import { motion } from 'framer-motion'
import { BsSignpostFill } from 'react-icons/bs'

export const Article = () => {
	const [listNews, setListNews] = useState([])

	// useEffect(() => {
	// 	const getNews = async () => {
	// 		const data = await NewsService.getAll()

	// 		setListNews(data)
	// 	}

	// 	getNews()
	// }, [])

	return (
		<div className={styles.article}>
			<div className='main__container'>
				<motion.div
					className={styles.menu}
					initial={{
						y: -50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.3,
					}}
				>
					<div className={styles.logo}>
						<BsSignpostFill />
					</div>
					<div class={styles.title}>
						<hr className={styles.line} />
						<h2>Новости</h2>
						<hr className={styles.line} />
					</div>
				</motion.div>
				<motion.div
					className={styles.news}
					initial={{
						y: 50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.5,
					}}
				>
					{!listNews
						? null
						: listNews.map((news, index) => <New key={index} news={news} />)}
				</motion.div>
			</div>
		</div>
	)
}
