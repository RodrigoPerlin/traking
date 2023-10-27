describe('template spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('search img and TextField', () => {
        cy.get('[data-cy="codigo-rastreio"]').should('be.visible')
        cy.get('[data-cy="img-home"]').should('be.visible')
    })

    it('Writer TextField', () => {
        cy.get('[data-cy="codigo-rastreio"]').type('ORDN15W44EPR31N9')
    })
})
