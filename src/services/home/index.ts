import api from '../api'

const SEARCH_DEPOSITIONS = 'api/depositions'

export const searchDepositions = async () => {
    try {
        const result = await api.get(SEARCH_DEPOSITIONS)
        return result.data
    } catch (error) {
        console.error('Erro na chamada à API:', error)
        throw error
    }
}
