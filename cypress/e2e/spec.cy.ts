describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/commands/actions')
  })
})
