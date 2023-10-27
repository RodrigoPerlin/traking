import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '.'
import '@testing-library/jest-dom/extend-expect'

describe('Footer Component', () => {
    it('render a Footer with the correct text', () => {
        render(<Footer />)

        const aa = screen.getAllByText(
            'Encontre.com. Todos os direitos reservados.'
        )
        expect(aa).not.toBeNull()
    })
    it('render icon facebook and instagram', () => {
        render(<Footer />)

        expect(screen.getByTestId('facebook')).toBeInTheDocument()

        expect(screen.getByTestId('instagram')).toBeInTheDocument()
    })
})
