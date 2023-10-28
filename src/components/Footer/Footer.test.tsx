import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer Component', () => {
    it('render a Footer with the correct text', () => {
        render(<Footer />)

        const text = screen.getAllByText(
            'Encontre.com. Todos os direitos reservados.'
        )
        expect(text).not.toBeNull()
    })
    it('render icon facebook and instagram', () => {
        render(<Footer />)

        expect(screen.getByTestId('facebook')).not.toBeNull()

        expect(screen.getByTestId('instagram')).not.toBeNull()
    })
})
