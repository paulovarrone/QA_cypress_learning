Cypress.Commands.add('visitarURLNonoTeste',() => {
    cy.visit('http://automationexercise.com');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('verificarProdutosNonoTeste', () => {
    cy.visitarURLNonoTeste();
    cy.get('[href="/products"]').click();
    
    const produtosID = [
        1, 2, 3, 4, 5, 6, 7, 8,
        11, 12, 13, 14, 15, 16,
        18, 19, 20, 21, 22, 23, 24,
        28, 29, 30, 31, 33, 35,
        37, 38, 39, 40, 41, 42, 43
    ];

    produtosID.forEach((id) => {
        cy.get(`[href="/product_details/${id}"]`).click();
        cy.go('back');
    });


    
})

Cypress.Commands.add('buscarProdutoNome', () => {
    cy.fixture('produtos').then((dados) => {
        cy.visit('http://automationexercise.com');
        cy.get('[href="/products"]').click();
        cy.get('#search_product').clear();
        cy.get('#search_product').type(dados.produtosLoja.produto1);
        cy.get('#submit_search').click();
        cy.contains('h2', 'Searched Products').should('be.visible');
        cy.get('.product-image-wrapper').should('be.visible').and('not.be.empty');
    });
     
});