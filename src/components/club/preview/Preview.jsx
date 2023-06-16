import styles from './Preview.module.scss'

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className='main__container'>
				<div className={styles.text}>
					<h5>Клуб</h5>
					<p>Краткое описвание того, что будет на странице</p>
				</div>
			</div>
		</div>
	)
}
