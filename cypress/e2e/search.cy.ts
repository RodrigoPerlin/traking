describe('search', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('redirect page search', () => {
        cy.get('[data-cy="codigo-rastreio"]').type('1021')
        cy.get('[data-cy="button-send"]').type('{enter}')
        cy.get('#modal-no-acess').should('be.visible')
        cy.get('#modal-modal-title').should('contain', 'Opssss')
        cy.get('#modal-modal-description').should(
            'contain',
            'Não encontramos seu pacote. Verifique o número de rastreamento e tente novamente, ou entre em contato conosco para obter assistência.'
        )
    })
})
