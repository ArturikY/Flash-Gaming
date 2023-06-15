import { useSelector } from 'react-redux'

export const useBag = () => {
	// Получаем store - favorites из combineReducers
	const bag = useSelector(state => state.bag)

	return bag
}
