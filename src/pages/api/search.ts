import type { NextApiRequest, NextApiResponse } from 'next'

interface IResutls {
    id: string
    date: string
    status: string
    details: string
    city_start: string
    city_end: string
}

type TData = Array<{
    code: string
    results: IResutls[]
}>

const mock = [
    {
        code: '10Aa',
        results: [
            {
                id: '1',
                date: '27/10',
                status: 'criado',
                details: 'Criado na central',
                city_start: 'cidade_inicio',
                city_end: 'city_start',
            },
            {
                id: '2',
                date: '27/10',
                status: 'despacho',
                details: 'Criado na central',
                city_start: 'cidade_inicio',
                city_end: 'city_start',
            },
            {
                id: '3',
                date: '28/10',
                status: 'transito',
                details: 'Criado na central',
                city_start: 'cidade_inicio',
                city_end: 'city_start',
            },
            {
                id: '4',
                date: '30/10',
                status: 'saiu_entrega',
                details: 'Criado na central',
                city_start: 'cidade_inicio',
                city_end: 'city_start',
            },
        ],
    },
    {
        code: '2020',
        results: [
            {
                id: '1',
                date: '27/10',
                status: 'criado',
                details: 'Criado na central',
                city_start: 'cidade_inicio',
                city_end: 'city_start',
            },
            {
                id: '2',
                date: '27/10',
                status: 'despacho',
                details: 'Criado na central',
                city_start: 'cidade_inicio',
                city_end: 'city_start',
            },
        ],
    },
]

const handler = async (req: NextApiRequest, res: NextApiResponse<TData>) => {
    const { code } = req.query
    const output = mock.filter((item) => item.code === code)
    setTimeout(() => {
        res.status(200).json({ ...output })
    }, 4000)
}
export default handler
