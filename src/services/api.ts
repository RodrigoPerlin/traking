import axios from 'axios'
import { apiHost } from '../utils/urls'

const api = axios.create({
    baseURL: apiHost,
})

export default api
