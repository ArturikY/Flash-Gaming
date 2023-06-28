import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { useRef, useState } from 'react'

export const Header = () => {
	// For Burger
	const [burger, setBurger] = useState(false)
	const [menu, setMenu] = useState(false)
	const burgerRef = useRef()

	const toggleBurger = () => {
		setBurger(prev => !prev)
		setMenu(prev => !prev)
	}

	// For fixed Header
	// const [header, setHeader] = useState(false)

	// const toggleHeader = () => {
	// 	setHeader(prev => !prev)
	// 	console.log(toggleHeader.current)
	// }

	return (
		<header className='header'>
			<div className='main__container'>
				<div className={styles.content}>
					<div href='#' className={styles.logo}>
						<img src='/Logo.png' />
					</div>
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
								<Link to='/' class={styles.link}>
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
