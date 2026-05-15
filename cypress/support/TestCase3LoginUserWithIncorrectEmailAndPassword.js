Cypress.Commands.add('visitarURLTerceiroTeste', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('logarNaContaErroTerceiroTeste', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.contains('h2','Login to your account').should('be.visible'); 
        cy.get('[data-qa="login-email"]').type(dados.usuarioIncorreto.email);
        cy.get('[data-qa="login-password"]').type(dados.usuarioIncorreto.password);
        cy.get('[data-qa="login-button"]').click();
        cy.contains('p','Your email or password is incorrect!').should('be.visible');
    });
})

