Cypress.Commands.add('visitarURL22', () => {
    cy.visit('https://automationexercise.com/');
})

Cypress.Commands.add('verificarPaginaInicial22', () => {
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('scrollParaFimDaPagina22', () => {
    cy.scrollTo('bottom');

})

Cypress.Commands.add('verificarItensRecomendados22', () => {
    cy.contains('h2', 'recommended items').should('be.visible');
});

Cypress.Commands.add('verificarItensRecomendados22', () => {
    cy.contains('h2', 'recommended items').should('be.visible');
});

Cypress.Commands.add('adicionarItemRecomendadoAoCarrinho22', () => {
    cy.get('.carousel-inner [data-product-id="5"]').click();
});

Cypress.Commands.add('irParaCarrinho22', () => {
    cy.contains('u', 'View Cart').click();
});

Cypress.Commands.add('verificarProdutoNoCarrinho22', () => {
    cy.contains('a', 'Winter Top').should('be.visible');
});