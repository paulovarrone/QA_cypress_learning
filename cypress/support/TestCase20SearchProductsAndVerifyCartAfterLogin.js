Cypress.Commands.add('visitarURL20', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('clicarBtnLogin', () => {
    cy.contains('a', 'Products').click();
});

Cypress.Commands.add('pesquisarProduto', () => {
    cy.contains('h2','All Products').should('be.visible');
    cy.url().should('include', '/products');
});

Cypress.Commands.add('digitarProduto', () => {
    cy.get('#search_product').type('Men Tshirt');
    cy.get('#submit_search').click();
});

Cypress.Commands.add('verificarProdutoPesquisado', () => {
    cy.contains('h2','Searched Products').should('be.visible');
});

Cypress.Commands.add('verificarProdutoProcurado', () => {
    cy.contains('p','Men Tshirt').should('be.visible');
});

Cypress.Commands.add('colocarProdutoNoCarrinho', () => {    
    cy.get('[data-product-id="2"]').eq(0).click();
    cy.contains('button', 'Continue Shopping').click();
});

Cypress.Commands.add('irAoCarrinho', () => {
    cy.contains('a', 'Cart').click();
    cy.contains('a', 'Men Tshirt').should('be.visible');
});

Cypress.Commands.add('realizarLogin', () => {
    cy.contains('a', 'Signup / Login').click();

    cy.fixture('criarConta').then((dados) => {
        cy.get('[data-qa="login-email"]').type(dados.Teste4.email);
        cy.get('[data-qa="login-password"]').type(dados.Teste4.password);
        cy.get('[data-qa="login-button"]').click();    
    })

});

Cypress.Commands.add('irAoCarrinhoSemVerificar', () => {
    cy.contains('a', 'Cart').click();
});

Cypress.Commands.add('verificarProdutoNoCarrinho', () => {
    cy.contains('a', 'Men Tshirt').should('be.visible');
});