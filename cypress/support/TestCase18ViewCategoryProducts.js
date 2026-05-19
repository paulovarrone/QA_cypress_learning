Cypress.Commands.add('visitarURL18', () => {
    cy.visit('/');
    
});

Cypress.Commands.add('verificarHomePage18', () => {
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('verificarCategorias18', () => {
    cy.contains('h2', 'Category').should('be.visible');
    cy.contains('a', 'Women').should('be.visible')
    cy.contains('a', 'Men').should('be.visible')
    cy.contains('a', 'Kids').should('be.visible')
});

Cypress.Commands.add('clicarCategoriaFeminina18', () => {
    cy.contains('a', 'Women').click();
});

Cypress.Commands.add('clicarCategoriaAbaixoFeminina18', () => {
    cy.contains('a', 'Tops').click();
});

Cypress.Commands.add('verificarProdutosCategoriaFeminina18', () => {
    cy.contains('h2', 'Women - Tops Products').should('be.visible');
});

Cypress.Commands.add('clicarSubcategoriaMasculina18', () => {
    cy.contains('a', 'Men').click();
    cy.get('a[href="/category_products/6"]').click();
});

Cypress.Commands.add('verificarProdutosCategoriaMasculina18', () => {
    cy.contains('h2', 'Men - Jeans Products').should('be.visible');
});
