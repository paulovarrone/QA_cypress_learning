Cypress.Commands.add('visitarURLOitavoTeste', () => {
	cy.visit('http://automationexercise.com');
	cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('verificarProdutosOitavoTeste', () => {
    cy.visitarURLOitavoTeste();
	cy.get('[href="/products"]').click();
	cy.url().should('include', '/products');
	cy.contains('h2', 'All Products').should('be.visible');
	cy.contains('.features_items').should('not.be.empty');
	cy.get('[href="/product_details/1"]').click();
	cy.url().should('include', '/product_details/1');
	cy.get('.product-information h2').should('be.visible').and('not.be.empty');
	cy.contains('p','Category').should('be.visible').and('not.be.empty');
	cy.contains('Span', 'Rs').should('be.visible').and('not.be.empty');
	cy.contains('p','Availability').should('be.visible').and('not.be.empty');
	cy.contains('p','Condition').should('be.visible').and('not.be.empty');
	cy.contains('p','Brand').should('be.visible').and('not.be.empty');
})