import React from 'react'
import { render, screen } from '@testing-library/react'
import Table from '.'

describe('Table Component', () => {
    const infoMock = [
        {
            id: '1',
            date: '27/10',
            status: 'criado',
            details: 'Criado na central',
            city_start: 'cidade_inicio',
            city_end: 'city_start',
        },
    ]
    it('render a Table', () => {
        render(<Table info={infoMock} />)
        expect(screen.getAllByTestId('status-data'))
        expect(screen.getAllByTestId('status-status'))
        expect(screen.getAllByTestId('status-detalhes'))
        expect(screen.getByText('Criado na central'))
        expect(screen.getByText('criado'))
        expect(screen.getByText('27/10'))
    })
})
