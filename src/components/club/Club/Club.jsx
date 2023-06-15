import styles from './Club.module.scss'
import { Header } from '../../header/Header'
import { Preview } from '../preview/Preview'
import { Info } from '../info/Info'

export const Club = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Preview />
			<Info />
		</div>
	)
}
