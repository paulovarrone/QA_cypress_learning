Cypress.Commands.add('visitarURL10', () => {
	cy.visit('/');
	
})

Cypress.Commands.add('verificarHomePage10', () => {
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('desceParaFimPagina10', () => {
        cy.scrollTo('bottom');
})


Cypress.Commands.add('seInscreveDecimoTeste10', () => {
    cy.fixture('subscription').then((dados) => {
        cy.scrollTo('bottom');
        cy.get('#susbscribe_email').type(dados.inscricao.email);
        cy.get('#subscribe').click();       
    });    
})

Cypress.Commands.add('verificarInscricao10', () => {
        cy.contains('div', 'You have been successfully subscribed!').should('be.visible');
})