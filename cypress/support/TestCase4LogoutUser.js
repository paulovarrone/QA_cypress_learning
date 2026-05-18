Cypress.Commands.add('visitarURL4', () => {
    cy.visit('https://automationexercise.com/');
    
})

Cypress.Commands.add('verificaHome4', () => {
    cy.get('#slider').should('be.visible');
})


Cypress.Commands.add('vaiParaPaginaLogin4', () => {
    cy.get('a[href="/login"]').click();
    
})

Cypress.Commands.add('verificarLogin4', () => {
    cy.contains('h2','Login to your account').should('be.visible');
});

Cypress.Commands.add('logarNaConta4', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.get('[data-qa="login-email"]').type(dados.Teste4.email);
        cy.get('[data-qa="login-password"]').type(dados.Teste4.password);
        cy.get('[data-qa="login-button"]').click();     
    });
})

Cypress.Commands.add('verificarUsuarioLogado4', () => {
    cy.contains('a','Logged in as').should('be.visible');  
})

Cypress.Commands.add('deslogar4', () => {
    cy.get('a[href="/logout"]').click();
})

Cypress.Commands.add('verificarDeslogado4', () => {
    cy.contains('h2','Login to your account').should('be.visible');
})