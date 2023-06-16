// Add HOST
export const HOST = ''

export const makeNewList = arr => {
	const newList = []

	for (const el of arr) {
		const newObj = {
			id: 0,
			count: 1,
			image: '',
			title: '',
			description: '',
			price: '',
		}
		newObj.id = el.id
		newObj.image = el.image
		newObj.title = el.title
		newObj.description = el.description
		newObj.price = el.price
		newList.push(newObj)
	}

	return newList
}

export const deleteEl = (list, elem) => {
	list.splice(list.indexOf(elem), 1)
}
