Cypress.Commands.add('visitarURL5', () => {
    cy.visit('https://automationexercise.com/');
    
})

Cypress.Commands.add('verificarHome5', () => {
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('visitarLogin5', () => {
    cy.get('a[href="/login"]').click();
})

Cypress.Commands.add('verificarSignUp5', () => {
    cy.contains('h2', 'New User Signup!').should('be.visible') 
})

Cypress.Commands.add('criacaoExistente5', () => {
    cy.fixture('criarConta').then((dados) => {   
        cy.get('[placeholder="Name"]').type(dados.Teste5.name);
        cy.get('[data-qa="signup-email"]').type(dados.Teste5.email);
        cy.get('[data-qa="signup-button"]').click();
    });
});

Cypress.Commands.add('verificarExistente5', () => {    
    cy.contains('p', 'Email Address already exist!').should('be.visible');
})