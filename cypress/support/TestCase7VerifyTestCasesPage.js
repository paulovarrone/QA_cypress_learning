Cypress.Commands.add('visitarURL7', () => {
	cy.visit('http://automationexercise.com');
	
})

Cypress.Commands.add('verificarHome7', () => {
	cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('irParaTestCases7', () => {
	cy.contains('button', 'Test Cases').click();
	
})

Cypress.Commands.add('verificarPaginaTestCases7', () => {
	cy.url().should('include','/test_cases');
})