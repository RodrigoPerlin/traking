describe('home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('search img and TextField', () => {
        cy.get('[data-cy="codigo-rastreio"]').should('be.visible')
        cy.get('[data-cy="img-home"]').should('be.visible')
    })

    it('Writer TextField', () => {
        cy.get('[data-cy="codigo-rastreio"]').find('input').type('222')
        cy.get('[data-cy="button-send"]').wait(1000).click()
        cy.get('#modal-no-acess').should('be.visible')
        cy.get('#modal-modal-title').should('contain', 'Opssss')
        cy.get('#modal-modal-description').should(
            'contain',
            'Não encontramos seu pacote. Verifique o número de rastreamento e tente novamente, ou entre em contato conosco para obter assistência.'
        )
    })
})
