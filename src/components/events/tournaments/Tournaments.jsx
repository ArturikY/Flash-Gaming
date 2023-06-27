import { useEffect } from 'react'
import styles from './Tournaments.module.scss'
import { EventsService } from '../../../services/Events.service'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Tournament = () => {
	const [listEvents, setListEvents] = useState([])

	// useEffect(() => {
	// 	const getEvents = async () => {
	// 		const data = await EventsService.getAll()

	// 		setListEvents(data)
	// 	}

	// 	getEvents()
	// }, [])

	return (
		<div className={styles.tournament}>
			<div className='main__container'>
				<motion.div
					className={styles.events}
					initial={{
						y: 50,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
						duration: 0.3,
					}}
				>
					{!listEvents
						? null
						: listEvents.map((act, index) => (
								<div key={index} className={styles.event}>
									<h2 className={styles.title}>{act.title}</h2>
									<img src={`${act.image}`} alt='Ooops' />
									<p className={styles.description}>{act.description}</p>
								</div>
						  ))}
				</motion.div>
			</div>
		</div>
	)
}
