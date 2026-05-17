const marcas = ['Polo', 'H&M', 'Madame', 'Mast & Harbour', 'Babyhug', 'Allen Solly Junior', 'Kookie Kids', 'Biba'];

Cypress.Commands.add('visitarURL19', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('clicarBtnViewProduct', () => {
    cy.get('a[href="/products"]').click();
});

Cypress.Commands.add('verificarMarcas', () => {
    marcas.forEach(nomes => {
        cy.contains('a', `${nomes}`).should('be.visible');
    });
});

Cypress.Commands.add('clicarMarca', () => {
    cy.contains('a', 'H&M').click();
});

Cypress.Commands.add('verificarProdutosMarca', () => {
    cy.url().should('include', 'brand_products/H&M');
    cy.get('.features_items').should('be.visible').and('not.be.empty');
});

Cypress.Commands.add('clicarEmOutraMarca', () => {
    cy.get('a[href="/brand_products/Polo"]').click();
});

Cypress.Commands.add('verificarProdutosOutraMarca', () => {
    cy.url().should('include', 'brand_products/Polo');
    cy.get('.features_items').should('be.visible').and('not.be.empty');
});