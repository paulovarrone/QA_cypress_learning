Cypress.Commands.add('visitarURLQuintoTeste', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('criacaoExistenteQuintoTeste', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.contains('h2', 'New User Signup!').should('be.visible') 
        cy.get('[placeholder="Name"]').type(dados.Teste5.name);
        cy.get('[data-qa="signup-email"]').type(dados.Teste5.email);
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('p', 'Email Address already exist!').should('be.visible');
    });
});