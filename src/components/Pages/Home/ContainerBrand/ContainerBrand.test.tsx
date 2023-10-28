import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContainerBrand from './index'
import '@testing-library/jest-dom/extend-expect'

describe('CardsContainerBrand Component', () => {
    const handleKeyDownMock = jest.fn()
    const handleClickMock = jest.fn()
    const handleChangeMock = jest.fn()
    const inputValueMock = '11111'

    it('render a ContainerBrand with encontre.com correct', () => {
        render(
            <ContainerBrand
                inputValue={inputValueMock}
                handleChange={handleChangeMock}
                handleClick={handleClickMock}
                handleKeyDown={handleKeyDownMock}
            />
        )

        const text = screen.getByTestId('find-element')
        expect(text).toBeInTheDocument()
    })
    it('render a ContainerBrand with text in textField', () => {
        render(
            <ContainerBrand
                inputValue={inputValueMock}
                handleChange={handleChangeMock}
                handleClick={handleClickMock}
                handleKeyDown={handleKeyDownMock}
            />
        )

        const textField = screen.getByLabelText('Seu Código de Rastreio')
        expect(textField).toHaveValue('11111')
    })
})
