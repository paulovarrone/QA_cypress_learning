Cypress.Commands.add('visitarURLdecimoPrim', () => {
    cy.visit('http://automationexercise.com');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('entrarNaPaginaDoCarrinho', () => {
    cy.contains('a[href="/view_cart"]', 'Cart').click();
});

Cypress.Commands.add('scrollParaFimDaPagina', () => {
    cy.scrollTo('bottom');
});

Cypress.Commands.add('verificarVisibilidadeInscricao', () => {
    cy.contains('h2', 'Subscription').should('be.visible');
});

Cypress.Commands.add('realizarInscricao', () => {
    cy.fixture('subscription').then((dados) => {
        cy.get('#susbscribe_email').type(dados.inscricao.email);
        cy.get('#subscribe').click();  
    });   
});

Cypress.Commands.add('verificarMensagemSucesso', () => {
    cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
});



