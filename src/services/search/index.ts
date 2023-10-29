import api from '../api'

const SEARCH_TRAKING = 'api/search'

export const searchTraking = async (code: string) => {
    try {
        const result = await api.get(SEARCH_TRAKING + `?code=${code}`)
        return result.data
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erro na chamada à API:', error)
    }
}
