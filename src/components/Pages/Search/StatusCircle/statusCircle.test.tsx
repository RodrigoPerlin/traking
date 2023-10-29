import React from 'react'
import { render, screen } from '@testing-library/react'
import StatusCircle from '.'

describe('StatusCircle Component', () => {
    const tempMock = jest.fn()
    const statusMock = 'Criado'
    const colorMock = 'Criado'
    const timerMock = false
    it('render a StatusCircle find status', () => {
        render(
            <StatusCircle
                color={colorMock}
                timer={timerMock}
                status={statusMock}
                temp={tempMock}
            />
        )

        const text = screen.getAllByTestId('status-element')
        expect(text).not.toBeNull()
    })
    it('render icon criado', () => {
        render(
            <StatusCircle
                color={colorMock}
                timer={timerMock}
                status={statusMock}
                temp={tempMock}
            />
        )
        const text = screen.getAllByTestId('FollowTheSignsIcon')
        expect(text).not.toBeNull()
    })
    it('render icon despacho', () => {
        render(
            <StatusCircle
                color={colorMock}
                timer={timerMock}
                status={'Despacho'}
                temp={tempMock}
            />
        )
        const text = screen.getAllByTestId('FileDownloadDoneIcon')
        expect(text).not.toBeNull()
    })

    it('render icon transito', () => {
        render(
            <StatusCircle
                color={colorMock}
                timer={timerMock}
                status={'Transito'}
                temp={tempMock}
            />
        )
        const text = screen.getAllByTestId('FlightIcon')
        expect(text).not.toBeNull()
    })

    it('render icon saiu para entrega', () => {
        render(
            <StatusCircle
                color={colorMock}
                timer={timerMock}
                status={'Saiu Entrega'}
                temp={tempMock}
            />
        )
        const text = screen.getAllByTestId('DirectionsBusIcon')
        expect(text).not.toBeNull()
    })

    it('render icon entregue', () => {
        render(
            <StatusCircle
                color={colorMock}
                timer={timerMock}
                status={'Entregue'}
                temp={tempMock}
            />
        )
        const text = screen.getAllByTestId('MoodIcon')
        expect(text).not.toBeNull()
    })
})
