import axiosClient from './axiosClient'

const todoAPIs = {
	fetchTodos: () => {
		const url = 'todo'
		return axiosClient.get(url)
	},

	createTodo: data => {
		const url = 'todo'
		return axiosClient.post(url, data)
	},

	updateTodo: (id, data) => {
		const url = `todo/${id}`
		return axiosClient.patch(url, data)
	},

	deleteTodos: id => {
		const url = `todo/${id}`
		return axiosClient.delete(url)
	}
}

export default todoAPIs