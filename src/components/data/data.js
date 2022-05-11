import axios from 'axios'

const api = axios.create({
    baseURL  : `https://jsonplaceholder.typicode.com/users/1/todos`
})

const getData = api.get('/').then(res => {
    return res.data
})

export default getData