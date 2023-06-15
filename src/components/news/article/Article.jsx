import { useEffect, useState } from 'react'
import { New } from '../new/New'
import styles from './Article.module.scss'
import { NewsService } from '../../../services/News.service.js'

export const Article = () => {
	const [listNews, setListNews] = useState([])

	useEffect(() => {
		const getNews = async () => {
			const data = await NewsService.getAll()

			setListNews(data)
		}

		getNews()
	}, [])

	return (
		<div className={styles.article}>
			<div className='main__container'>
				<div className={styles.logo} />
				<div class={styles.title}>
					<hr className={styles.line} />
					<h2>Новости</h2>
					<hr className={styles.line} />
				</div>
				<div className={styles.news}>
					{listNews.map((news, index) => (
						<New key={index} news={news} />
					))}
				</div>
			</div>
		</div>
	)
}
