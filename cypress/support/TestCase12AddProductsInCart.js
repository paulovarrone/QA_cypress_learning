const produtos = [
    1, 2
];

Cypress.Commands.add('visitarURL12', () => {
    cy.visit('/');
    
});

Cypress.Commands.add('verificarHome12', () => {
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('entraEmProdutos12', () => {
    cy.contains('a[href="/products"]', 'Products').click();
});

Cypress.Commands.add('hoverEAdicionarProdutosAoCarrinho12', () => {
    produtos.forEach((id) => {
        cy.get(`img[src="/get_product_picture/${id}"]`).trigger('mouseover');
        cy.get(`[data-product-id="${id}"]`).eq(0).click();
        cy.contains('button', 'Continue Shopping').click();
    });
 
});

Cypress.Commands.add('entrarNoCarrinhoVerificaVisibilidadeProdutos12', () => {
    cy.contains('a[href="/view_cart"]', 'Cart').click();

    produtos.forEach((id) => {
        cy.get(`#product-${id}`).should('be.visible');
    });
});

Cypress.Commands.add('verificarDetalhesProdutosNoCarrinho12', () => {
    produtos.forEach((id) => {
        cy.get(`#product-${id}`).within(() => {
            cy.get('.cart_price').should('be.visible').and('not.be.empty');
            cy.get('.cart_quantity').should('be.visible').and('not.be.empty');
            cy.get('.cart_total').should('be.visible').and('not.be.empty');
        });
    });
});


Cypress.Commands.add('prosseguirParaCheckout12', () => {
    cy.contains('a','Proceed To Checkout').click();
    cy.contains('button','Continue On Cart').click();
});


