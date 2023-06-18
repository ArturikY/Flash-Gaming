import { useEffect } from 'react'
import styles from './Tournament.module.scss'
import { EventsService } from '../../../services/Events.service'
import { useState } from 'react'

export const Tournament = () => {
	const [listEvents, setListEvents] = useState([])

	useEffect(() => {
		const getEvents = async () => {
			const data = await EventsService.getAll()

			setListEvents(data)
		}

		getEvents()
	}, [])

	return (
		<div className={styles.tournament}>
			<div className='main__container'>
				<div className={styles.events}>
					{listEvents.map((event, index) => (
						<div key={index} className={styles.event}>
							<h2 className={styles.title}>{event.title}</h2>
							<img src={`${event.image}`} alt='Ooops' />
							<p className={styles.description}>{event.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
