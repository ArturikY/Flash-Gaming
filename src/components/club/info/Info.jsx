import styles from './Info.module.scss'

export const Info = () => {
	return (
		<div className={styles.info}>
			<div className='main__container'>
				{/*Content with image*/}
				<div className={styles.content_image}>
					<div className={styles.text}>
						<h2>Flash Gaming</h2>
						<p>
							Flash Gaming - это будущая киберспортивная организация, но в
							данный момент действующий киберспортивный клуб, по разным игровым
							дисциплинам, где присутствует киберспорт. Дата основания данного
							клуба: 21.03.2022, на данный момент стремится к получению
							официального статуса. Основателем данной киберспортивной
							корпорации, является HasanBoy-(Хасан)
						</p>
					</div>
					<div className={styles.image} />
				</div>
				{/*Content text*/}
				<div className={styles.content_text}>
					<div className={styles.title}>
						<hr className={styles.line} />
						<h2>История</h2>
						<hr className={styles.line} />
					</div>
					<h3>Наш основатель</h3>
					<div className={styles.text}>
						Основателем данной киберспортивной корпорации, является
						HasanBoy-(Хасан) является капитаном команды, второго состава Flash
						Gaming, по дисциплине Brawl Stars, родом из Республики Таджикистан,
						21.03.2004 года рождения. Представляет на киберспортивных аренах
						Российскую Федерацию. Проживает в городе Челябинск, где как рас таки
						и был основан клуб. HasaBoy, сам же раньше был известен в комьюнити
						BS как Lil'Spike, после распада его старого состава он переименовал
						свой псевдоним и ник в том числе на HasanBoy. Когда собрал новый
						состав, то назвал команду Flash Gaming, с этого и началось история
						данного клуба.
					</div>
				</div>
				{/*Content with image*/}
				<div className={styles.content_image}>
					<div className={styles.image} />
					<div className={styles.text}>
						<h2>Flash Gaming</h2>
						<p>
							Flash Gaming - это будущая киберспортивная организация, но в
							данный момент действующий киберспортивный клуб, по разным игровым
							дисциплинам, где присутствует киберспорт. Дата основания данного
							клуба: 21.03.2022, на данный момент стремится к получению
							официального статуса. Основателем данной киберспортивной
							корпорации, является HasanBoy-(Хасан)
						</p>
					</div>
				</div>
				{/*Content text*/}
				<div className={styles.content_text} style={{ marginBottom: '100px' }}>
					<div className={styles.title}>
						<hr className={styles.line} />
						<h2>История</h2>
						<hr className={styles.line} />
					</div>
					<h3>Наш основатель</h3>
					<div className={styles.text}>
						Основателем данной киберспортивной корпорации, является
						HasanBoy-(Хасан) является капитаном команды, второго состава Flash
						Gaming, по дисциплине Brawl Stars, родом из Республики Таджикистан,
						21.03.2004 года рождения. Представляет на киберспортивных аренах
						Российскую Федерацию. Проживает в городе Челябинск, где как рас таки
						и был основан клуб. HasaBoy, сам же раньше был известен в комьюнити
						BS как Lil'Spike, после распада его старого состава он переименовал
						свой псевдоним и ник в том числе на HasanBoy. Когда собрал новый
						состав, то назвал команду Flash Gaming, с этого и началось история
						данного клуба.
					</div>
				</div>
			</div>
		</div>
	)
}
