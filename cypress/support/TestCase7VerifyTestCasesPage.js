Cypress.Commands.add('visitarURLSetimoTeste', () => {
	cy.visit('http://automationexercise.com');
	cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('testCasesSetimoTeste', () => {
	cy.contains('button', 'Test Cases').click();
	cy.url().should('include','/test_cases');
})