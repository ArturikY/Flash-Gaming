import { useState } from 'react'
import styles from './New.module.scss'

export const New = ({ news }) => {
	const [newNews, setNewNews] = useState(news)

	return (
		<div className={styles.new}>
			<h2 className={styles.title}>{newNews.title}</h2>
			<div className={styles.text}>{newNews.content}</div>
		</div>
	)
}
