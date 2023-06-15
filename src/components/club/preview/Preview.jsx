import styles from './Preview.module.scss'

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className='main__container'>
				<div className={styles.text}>
					<h5>Клуб</h5>
					<p>Какой-нибудь очень громкий девиз, даже ещё громче</p>
				</div>
			</div>
		</div>
	)
}
