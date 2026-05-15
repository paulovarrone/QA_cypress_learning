Cypress.Commands.add('visitarURL13', () => {
    cy.visit('http://automationexercise.com');
    cy.get('#slider').should('be.visible');
});


Cypress.Commands.add('verificarQuantidade', () => {
    cy.visitarURL13();
    cy.contains('a[href="/product_details/1"]', 'View Product').click();
    cy.get('.product-information').should('be.visible');
    cy.get('#quantity').clear().type('4');
    cy.contains('button', 'Add to cart').click();
    cy.contains('a[href="/view_cart"]', 'View Cart').click();
    cy.get('#product-1').should('be.visible');
    cy.contains('.cart_quantity', '4').should('be.visible');
});
