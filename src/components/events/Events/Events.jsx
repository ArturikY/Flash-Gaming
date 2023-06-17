import styles from './Events.module.scss'
import { Header } from '../../Header/Header'
import { Preview } from '../preview/Preview'
import { Tournament } from '../tournaments/Tournaments'

export const Events = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Preview />
			<Tournament />
		</div>
	)
}
