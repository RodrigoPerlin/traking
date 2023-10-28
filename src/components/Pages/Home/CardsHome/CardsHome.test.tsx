import React from 'react'
import { render, screen } from '@testing-library/react'
import CardsHome from '.'
import '@testing-library/jest-dom/extend-expect'
describe('CardsHome Component', () => {
    const listMock = [
        {
            sku: '1aaza',
            name: 'Kelien',
            testimony:
                'Escrevo para declarar formalmente a minha intenção de repetir o uso do sistema Encontre.com.',
        },
    ]

    it('render a CardsHome with the correct text', () => {
        render(<CardsHome lists={listMock} />)

        const text = screen.getByTestId('testimony-element')
        expect(text).toBeInTheDocument()
    })
    it('render button Share and Learn More', () => {
        render(<CardsHome lists={listMock} />)

        expect(
            screen.getByRole('button', {
                name: /Share/i,
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', {
                name: /Learn More/i,
            })
        ).toBeInTheDocument()
    })
})
