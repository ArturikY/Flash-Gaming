import { useState } from 'react'
import { MainService } from '../../../services/Main.service'
import styles from './Team.module.scss'
import { useEffect } from 'react'

export const Team = () => {
	const [listPlayers, setListPlayers] = useState([])

	useEffect(() => {
		const getPlayers = async () => {
			const data = await MainService.getPlayers()

			setListPlayers(data)
		}

		getPlayers()
	}, [])

	return (
		<div className={styles.team}>
			<div className='main__container'>
				<div class={styles.title}>
					<hr className={styles.line} />
					<h2>Команда</h2>
					<hr className={styles.line} />
				</div>
				<div className={styles.players}>
					{listPlayers.map((player, index) => (
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
			</div>
		</div>
	)
}
