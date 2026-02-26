// Create new Axios client for custom configuration
import axios, { CanceledError } from 'axios';


export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export { CanceledError };