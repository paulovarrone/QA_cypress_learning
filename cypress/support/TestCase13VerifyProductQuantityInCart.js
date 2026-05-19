Cypress.Commands.add('visitarURL13', () => {
    cy.visit('/');
    
});

Cypress.Commands.add('verificarHome13', () => {
    cy.get('#slider').should('be.visible');
});


Cypress.Commands.add('entrarEmDetalhesDoProduto13', () => {
    cy.contains('a[href="/product_details/1"]', 'View Product').click();
    cy.get('.product-information').should('be.visible');
});


Cypress.Commands.add('adicionarProdutoAoCarrinho13', () => {
    cy.get('#quantity').clear().type('4');
    cy.contains('button', 'Add to cart').click();
    cy.contains('a[href="/view_cart"]', 'View Cart').click();
    
});

Cypress.Commands.add('verificarQuantidadeAdicionada13', () => {
    cy.get('#product-1').should('be.visible');
    cy.contains('.cart_quantity', '4').should('be.visible');
    
});

