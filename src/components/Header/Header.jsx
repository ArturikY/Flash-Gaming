import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { useRef, useState } from 'react'

export const Header = () => {
	const [burger, setBurger] = useState(false)
	const [menu, setMenu] = useState(false)
	const burgerRef = useRef()

	const toggleBurger = () => {
		setBurger(prev => !prev)
		setMenu(prev => !prev)
		console.log(burgerRef.current)
	}

	return (
		<header className={styles.header}>
			<div className='main__container'>
				<div className={styles.content}>
					<a href='#' className={styles.logo}>
						<img src='/public/Logo.png' />
					</a>
					<div
						class={burger ? 'burger active' : 'burger'}
						onClick={toggleBurger}
						ref={burgerRef}
					>
						<span></span>
					</div>
					<div class={menu ? 'menu active' : 'menu'}>
						<ul class={styles.list}>
							<li>
								<Link to='/main' class={styles.link}>
									Главная
								</Link>
							</li>
							<li>
								<Link to='/club' class={styles.link}>
									Клуб
								</Link>
							</li>
							<li>
								<Link to='/shop' class={styles.link}>
									Магазин
								</Link>
							</li>
							<li>
								<Link to='/news' class={styles.link}>
									Новости
								</Link>
							</li>
							<li>
								<Link to='/events' class={styles.link}>
									События
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}
