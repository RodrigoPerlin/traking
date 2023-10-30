describe('search', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('redirect page search', () => {
        cy.get('[data-cy="codigo-rastreio"]').find('input').type('10Aa')
        cy.get('[data-cy="button-send"]').wait(1000).click()
        cy.get('#status-circle')
        cy.get('#table-status')
    })
})
