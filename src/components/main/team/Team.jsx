import { useState } from 'react'
import { MainService } from '../../../services/Main.service'
import styles from './Team.module.scss'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const teamAnimation = {
	hidden: {
		y: 50,
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

export const Team = () => {
	const [listPlayers, setListPlayers] = useState([])

	// useEffect(() => {
	// 	const getPlayers = async () => {
	// 		const data = await MainService.getPlayers()

	// 		setListPlayers(data)
	// 		console.log(listPlayers)
	// 	}

	// 	getPlayers()
	// }, [])

	return (
		<motion.div className={styles.team} initial='hidden' whileInView='visible'>
			<motion.div className='main__container' variants={teamAnimation}>
				<div class={styles.title}>
					<hr className={styles.line} />
					<h2>Команда</h2>
					<hr className={styles.line} />
				</div>
				<div className={styles.players}>
					{!listPlayers
						? null
						: listPlayers.map((player, index) => (
								<div className={styles.player} key={index}>
									<div
										className={styles.image}
										style={{
											backgroundImage: `url(${player.image})`,
										}}
									/>
									<h4>{player.nickname}</h4>
									<p>{player.description}</p>
								</div>
						  ))}
				</div>
			</motion.div>
		</motion.div>
	)
}
