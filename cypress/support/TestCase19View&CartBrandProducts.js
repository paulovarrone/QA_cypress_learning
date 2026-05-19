const marcas = ['Polo', 'H&M', 'Madame', 'Mast & Harbour', 'Babyhug', 'Allen Solly Junior', 'Kookie Kids', 'Biba'];

Cypress.Commands.add('visitarURL19', () => {
    cy.visit('/');
    
});

Cypress.Commands.add('verificarHomePage19', () => {
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('clicarBtnViewProduct19', () => {
    cy.get('a[href="/products"]').click();
});

Cypress.Commands.add('verificarMarcas19', () => {
    marcas.forEach(nomes => {
        cy.contains('a', `${nomes}`).should('be.visible');
    });
});

Cypress.Commands.add('clicarMarca19', () => {
    cy.contains('a', 'H&M').click();
});

Cypress.Commands.add('verificarProdutosMarca19', () => {
    cy.url().should('include', 'brand_products/H&M');
    cy.get('.features_items').should('be.visible').and('not.be.empty');
});

Cypress.Commands.add('clicarEmOutraMarca19', () => {
    cy.get('a[href="/brand_products/Polo"]').click();
});

Cypress.Commands.add('verificarProdutosOutraMarca19', () => {
    cy.url().should('include', 'brand_products/Polo');
    cy.get('.features_items').should('be.visible').and('not.be.empty');
});