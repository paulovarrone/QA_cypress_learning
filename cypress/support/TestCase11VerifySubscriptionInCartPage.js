Cypress.Commands.add('visitarURL11', () => {
    cy.visit('/');
    
});

Cypress.Commands.add('verificarHome11', () => {
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('entrarNaPaginaDoCarrinho11', () => {
    cy.contains('a[href="/view_cart"]', 'Cart').click();
});

Cypress.Commands.add('scrollParaFimDaPagina11', () => {
    cy.scrollTo('bottom');
});

Cypress.Commands.add('verificarVisibilidadeInscricao11', () => {
    cy.contains('h2', 'Subscription').should('be.visible');
});

Cypress.Commands.add('realizarInscricao11', () => {
    cy.fixture('subscription').then((dados) => {
        cy.get('#susbscribe_email').type(dados.inscricao.email);
        cy.get('#subscribe').click();  
    });   
});

Cypress.Commands.add('verificarMensagemSucesso11', () => {
    cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
});



