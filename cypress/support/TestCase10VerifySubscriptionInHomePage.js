Cypress.Commands.add('visitarURLDecimoTeste', () => {
	cy.visit('http://automationexercise.com');
	cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('desceParaFimPagina', () => {
        cy.scrollTo('bottom');
})


Cypress.Commands.add('seInscreveDecimoTeste', () => {
    cy.fixture('subscription').then((dados) => {
        cy.scrollTo('bottom');
        cy.get('#susbscribe_email').type(dados.inscricao.email);
        cy.get('#subscribe').click();       
    });    
})

Cypress.Commands.add('verificarInscricao', () => {
        cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
})