import type { NextApiRequest, NextApiResponse } from 'next'

interface IResutls {
    id: string
    date: string
    status: string
    details: string
    city_start: string
    city_end: string
}

interface IData {
    code: string
    results: IResutls[]
}

const mock = [
    {
        code: '10Aa',
        results: [
            {
                id: '1',
                date: '27/10',
                status: 'criado',
                details: 'Ultima atualilzacao em Toledo',
                city_start: 'Frederico',
                city_end: 'Toledo',
            },
            {
                id: '2',
                date: '27/10',
                status: 'despacho',
                details: 'Ultima atualilzacao em Cascavel',
                city_start: 'Frederico',
                city_end: 'Toledo',
            },
            {
                id: '3',
                date: '28/10',
                status: 'transito',
                details: 'Ultima atualilzacao em Chapeco',
                city_start: 'Frederico',
                city_end: 'Toledo',
            },
            {
                id: '4',
                date: '30/10',
                status: 'saiu_entrega',
                details: 'Ultima atualilzacao em Pato Branco',
                city_start: 'Frederico',
                city_end: 'Toledo',
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

const handler = async (req: NextApiRequest, res: NextApiResponse<IData>) => {
    const { code } = req.query
    const output = mock.filter((item) => item.code === code)
    setTimeout(() => {
        res.status(200).json({ ...output[0] })
    }, 2000)
}
export default handler
