import { Header } from '../../header/Header'
import { Article } from '../article/Article'
import styles from './News.module.scss'

export const News = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Article />
		</div>
	)
}
