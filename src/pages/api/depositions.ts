import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
    sku: string
    name: string
    testimony: string
}>

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json([
        {
            sku: '123rwwe',
            name: 'roberto',
            testimony:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            sku: '1aaza',
            name: 'Kelien',
            testimony:
                'Escrevo para declarar formalmente a minha intenção de repetir o uso do sistema Encontre.com.',
        },
        {
            sku: '2bbzb',
            name: 'Eduardo',
            testimony:
                'Gostaria de ressaltar que estou satisfeito com a eficiência e o profissionalismo demonstrado pela equipe da Encontre.com.',
        },
        {
            sku: '199a9',
            name: 'Entregas ME',
            testimony:
                'Estou ansioso para continuar a utilizar o sistema de encomenda da Encontre.com e espero que essa parceria seja benéfica para ambas as partes.',
        },
    ])
}
