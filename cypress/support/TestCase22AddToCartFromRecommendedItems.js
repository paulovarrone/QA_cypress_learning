Cypress.Commands.add('visitarURL22', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('scrollParaFimDaPagina', () => {
    cy.scrollTo('bottom');

})

Cypress.Commands.add('verificarItensRecomendados', () => {
    cy.contains('h2', 'recommended items').should('be.visible');
});

Cypress.Commands.add('verificarItensRecomendados', () => {
    cy.contains('h2', 'recommended items').should('be.visible');
});

Cypress.Commands.add('adicionarItemRecomendadoAoCarrinho', () => {
    cy.get('.carousel-inner [data-product-id="5"]').click();
});

Cypress.Commands.add('irParaCarrinho', () => {
    cy.contains('u', 'View Cart').click();
});

Cypress.Commands.add('verificarProdutoNoCarrinho', () => {
    cy.contains('a', 'Winter Top').should('be.visible');
});