Cypress.Commands.add('visitarURL12', () => {
    cy.visit('http://automationexercise.com');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('adicionarAoCarrinho', () => {
    cy.visitarURL12();
    cy.contains('a[href="/products"]', 'Products').click();


    const produtos = [
        1, 2
    ];

    produtos.forEach((id) => {
        cy.get(`img[src="/get_product_picture/${id}"]`).trigger('mouseover');
        cy.get(`[data-product-id="${id}"]`).eq(0).click();
        cy.contains('button', 'Continue Shopping').click();
    });

    cy.contains('a[href="/view_cart"]', 'Cart').click();

    produtos.forEach((id) => {
        cy.get(`#product-${id}`).should('be.visible');
    });

    produtos.forEach((id) => {
        cy.get(`#product-${id}`).within(() => {
            cy.get('.cart_price').should('be.visible').and('not.be.empty');
            cy.get('.cart_quantity').should('be.visible').and('not.be.empty');
            cy.get('.cart_total').should('be.visible').and('not.be.empty');
        });
    });


    cy.contains('a','Proceed To Checkout').click();
    cy.contains('button','Continue On Cart').click();
});

