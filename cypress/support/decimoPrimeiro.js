Cypress.Commands.add('visitarURLdecimoPrim', () => {
    cy.visit('http://automationexercise.com');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('carrinhoCompras', () => {
    cy.fixture('subscription').then((dados) => {
        cy.visitarURLdecimoPrim();
        cy.contains('a[href="/view_cart"]', 'Cart').click();
        cy.scrollTo('bottom');
        cy.contains('h2', 'Subscription').should('be.visible');
        cy.get('#susbscribe_email').type(dados.inscricao.email);
        cy.get('#subscribe').click();
        cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
    });
    
});