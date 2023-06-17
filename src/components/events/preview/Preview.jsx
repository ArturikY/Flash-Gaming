import styles from './Preview.module.scss'

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className='main__container'>
				<div className={styles.text}>
					<h5>События</h5>
					<p>Краткое описание того, что будет на странице</p>
				</div>
			</div>
		</div>
	)
}
