import { Header } from '../../header/Header'
import { History } from '../history/History'
import { Preview } from '../preview/Preview'
import { Team } from '../team/Team'
import styles from './Main.module.scss'

export const Main = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Preview />
			<History />
			<Team />
		</div>
	)
}
