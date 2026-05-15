Cypress.Commands.add('visitarURLDecimoTeste', () => {
	cy.visit('http://automationexercise.com');
	cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('seInscreveDecimoTeste', () => {
    cy.fixture('subscription').then((dados) => {
        cy.visit('http://automationexercise.com');
        cy.scrollTo('bottom');
        cy.get('#susbscribe_email').type(dados.inscricao.email);
        cy.get('#subscribe').click();
        cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
    });    
})