import axios from 'axios'
import { ENVIRONMENT } from '../utils/urls'

const api = axios.create({
    baseURL: ENVIRONMENT,
})

export default api
