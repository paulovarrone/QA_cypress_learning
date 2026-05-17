Cypress.Commands.add('visitarURL18', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('verificarCategorias', () => {
    cy.contains('h2', 'Category').should('be.visible');
    cy.contains('a', 'Women').should('be.visible')
    cy.contains('a', 'Men').should('be.visible')
    cy.contains('a', 'Kids').should('be.visible')
});

Cypress.Commands.add('clicarCategoriaFeminina', () => {
    cy.contains('a', 'Women').click();
});

Cypress.Commands.add('clicarCategoriaAbaixoFeminina', () => {
    cy.contains('a', 'Tops').click();
});

Cypress.Commands.add('verificarProdutosCategoriaFeminina', () => {
    cy.contains('h2', 'Women - Tops Products').should('be.visible');
});

Cypress.Commands.add('clicarSubcategoriaMasculina', () => {
    cy.contains('a', 'Men').click();
    cy.get('a[href="/category_products/6"]').click();
});

Cypress.Commands.add('verificarProdutosCategoriaMasculina', () => {
    cy.contains('h2', 'Men - Jeans Products').should('be.visible');
});
