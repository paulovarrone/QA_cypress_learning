const produtosID = [
    1,2,3,4,5
];

const removerProdutoID = [
    2,5
];

Cypress.Commands.add('visitarURL17', () => {
    cy.visit('https://automationexercise.com/');
    
})

Cypress.Commands.add('verificarHome17', () => {
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('colocarProdutosNoCarrinho17', () => {
    produtosID.forEach(id => {
        cy.get(`a[data-product-id="${id}"]`).eq(0).click();
        cy.contains('Continue Shopping').click();
    });
    
})

Cypress.Commands.add('irParaOCarrinho17', () => {
    cy.contains('a', 'Cart').click();
    cy.url().should('include', '/view_cart');
});

Cypress.Commands.add('removerProdutoEspecificoDoCarrinho17', () => {
    removerProdutoID.forEach(id => {
        cy.get(`[data-product-id="${id}"]`).click();
    });
    
});

Cypress.Commands.add('verificarProdutoRemovido17', () => {
    removerProdutoID.forEach(id => {
        cy.get(`[data-product-id="${id}"]`).should('not.exist');
    });
});