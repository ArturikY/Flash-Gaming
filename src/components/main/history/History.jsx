import { Link } from 'react-router-dom'
import styles from './History.module.scss'
import { motion } from 'framer-motion'

const textAnimation = {
	hidden: {
		y: -50,
		opacity: 0,
	},

	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.7,
			duration: 0.5,
		},
	},
}

const plansAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},

	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 1.1,
			duration: 0.7,
		},
	},
}

export const History = () => {
	return (
		<motion.div
			className={styles.history}
			initial='hidden'
			whileInView='visible'
		>
			<div className='main__container'>
				<div className={styles.content}>
					<motion.div className={styles.block} variants={textAnimation}>
						<div className={styles.title}>
							<hr className={styles.line} />
							<h2>История</h2>
							<hr className={styles.line} />
						</div>
						<h3>Немного о нас</h3>
						<div className={styles.text}>
							<b>Flash Gaming</b> — это будущая киберспортивная организация, но
							в данный момент действующий киберспортивный клуб, по разным
							игровым дисциплинам, где присутствует киберспорт. Дата основания
							данного клуба: <b>21.03.2022</b>, на данный момент стремится к
							получению официального статуса.
						</div>
						<h4>Следите за последними новостями:</h4>
						<Link to='/news'>
							<div className={styles.link}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									class='bi bi-arrow-right'
									viewBox='0 0 16 16'
								>
									<path
										fill-rule='evenodd'
										d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
									/>
								</svg>
								<p>Новости</p>
							</div>
						</Link>
					</motion.div>
					<motion.div
						className={styles.block}
						initial='hidden'
						whileInView='visible'
						variants={plansAnimation}
					>
						<div class={styles.title}>
							<hr className={styles.line} />
							<h2>Планы</h2>
							<hr className={styles.line} />
						</div>
						<h3>Наши планы</h3>
						<div className={styles.plans}>
							<div className={styles.plan}>
								<div className={styles.title}>План</div>
								<div className={styles.info}>Какая-то информация</div>
								<div className={styles.description}>Какой-то план</div>
								<Link to='#'>
									<div className={styles.link}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											class='bi bi-arrow-right'
											viewBox='0 0 16 16'
										>
											<path
												fill-rule='evenodd'
												d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
											/>
										</svg>
										<p>Какая-то ссылка</p>
									</div>
								</Link>
							</div>
							<div className={styles.plan}>
								<div className={styles.title}>План</div>
								<div className={styles.info}>Какая-то информация</div>
								<div className={styles.description}>Какой-то план</div>
								<Link to='#'>
									<div className={styles.link}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											class='bi bi-arrow-right'
											viewBox='0 0 16 16'
										>
											<path
												fill-rule='evenodd'
												d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
											/>
										</svg>
										<p>Какая-то ссылка</p>
									</div>
								</Link>
							</div>
						</div>
					</motion.div>
					<motion.div
						className={styles.block}
						initial='hidden'
						whileInView='visible'
						variants={textAnimation}
					>
						<div className={styles.title}>
							<div class={styles.title}>
								<hr className={styles.line} />
								<h2>История</h2>
								<hr className={styles.line} />
							</div>
						</div>
						<h3>Наш основатель</h3>
						<div className={styles.text}>
							Основателем данной киберспортивной корпорации, является
							<b className={styles.b_bag}>HasanBoy</b>-(Хасан) является
							капитаном команды, второго состава, по дисциплине{' '}
							<b>Brawl Stars</b>, родом из Республики Таджикистан,{' '}
							<b>21.03.2004</b> года рождения. Представляет на киберспортивных
							аренах Российскую Федерацию.
						</div>
						<h4>Участвуйте в наших событиях:</h4>
						<Link to='/news'>
							<div className={styles.link}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									class='bi bi-arrow-right'
									viewBox='0 0 16 16'
								>
									<path
										fill-rule='evenodd'
										d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
									/>
								</svg>
								<p>События</p>
							</div>
						</Link>
					</motion.div>
				</div>
			</div>
		</motion.div>
	)
}
