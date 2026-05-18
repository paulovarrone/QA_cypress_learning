Cypress.Commands.add('visitarURL8', () => {
	cy.visit('http://automationexercise.com');
	
})

Cypress.Commands.add('verificarHome8', () => {
	cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('verificarProdutos8', () => {
	cy.get('[href="/products"]').click();
	cy.url().should('include', '/products');
	cy.contains('h2', 'All Products').should('be.visible');
	
})

Cypress.Commands.add('verificarPrimeiroProduto8', () => {
	cy.contains('.features_items').should('not.be.empty');
	cy.get('[href="/product_details/1"]').click();
	cy.url().should('include', '/product_details/1');
	
})

Cypress.Commands.add('verificarDetalhesProduto8', () => {
	cy.get('.product-information h2').should('be.visible').and('not.be.empty');
	cy.contains('p','Category').should('be.visible').and('not.be.empty');
	cy.contains('Span', 'Rs').should('be.visible').and('not.be.empty');
	cy.contains('p','Availability').should('be.visible').and('not.be.empty');
	cy.contains('p','Condition').should('be.visible').and('not.be.empty');
	cy.contains('p','Brand').should('be.visible').and('not.be.empty');
})


