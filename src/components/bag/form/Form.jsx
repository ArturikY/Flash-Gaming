import { useState } from 'react'
import styles from './Form.module.scss'

export const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		comment: '',
	})

	console.log(formData)

	useEffect(() => {
		const sendForm = e => {
			e.preventDefault()
		}
	}, [formData])

	return (
		<div className={styles.form}>
			<div className='main__container'>
				<div className={styles.content}>
					<h1>Оформление заказа</h1>
					<p>
						Для оформления заказа, заполните формы ниже, после чего с вами
						свяжется наш куратор.
					</p>
					<form>
						<input
							onChange={e =>
								setFormData({
									name: e.target.value,
									email: formData.email,
									comment: formData.comment,
								})
							}
							value={formData.name}
							type='text'
							placeholder='Имя'
						/>
						<input
							onChange={e =>
								setFormData({
									name: formData.name,
									email: e.target.value,
									comment: formData.comment,
								})
							}
							value={formData.email}
							type='text'
							placeholder='E-mail'
						/>
						<textarea
							onChange={e =>
								setFormData({
									name: formData.name,
									email: formData.email,
									comment: e.target.value,
								})
							}
							value={formData.comment}
							cols='30'
							rows='10'
							placeholder='Комментарий'
						/>
						<div className={styles.btn_container}>
							<button>Отправить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
