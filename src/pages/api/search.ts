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
                details: 'Última atualização em Frederico',
                city_start: 'Frederico',
                city_end: 'Toledo',
            },
            {
                id: '2',
                date: '27/10',
                status: 'despacho',
                details: 'Última atualização em Frederico',
                city_start: 'Frederico',
                city_end: 'Toledo',
            },
            {
                id: '3',
                date: '28/10',
                status: 'transito',
                details: 'Última atualização em Frederico->Pato Branco',
                city_start: 'Frederico',
                city_end: 'Toledo',
            },
            {
                id: '4',
                date: '30/10',
                status: 'saiu_entrega',
                details: 'Última atualização em Pato Branco->Toledo',
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
                details: 'Última atualização em Teresinha',
                city_start: 'Teresinha',
                city_end: 'Pinheiros',
            },
            {
                id: '2',
                date: '27/10',
                status: 'despacho',
                details: 'Última atualização em Teresinha',
                city_start: 'Teresinha',
                city_end: 'Pinheiros',
            },
        ],
    },
]

const handler = async (req: NextApiRequest, res: NextApiResponse<IData>) => {
    const { code } = req.query
    const output = mock.filter((item) => item.code === code)
    res.status(200).json({
        results: [...output[0]?.results],
    })
}
export default handler
