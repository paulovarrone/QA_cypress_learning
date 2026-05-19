Cypress.Commands.add('visitarURL3', () => {
    cy.visit('/');
    
})

Cypress.Commands.add('verificarHome3', () => {
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('irParaPaginaLogin3', () => {
    cy.get('a[href="/login"]').click();
})

Cypress.Commands.add('verificarLogin3', () => {
    cy.contains('h2','Login to your account').should('be.visible'); 
});

Cypress.Commands.add('logarNaContaErro3', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.get('[data-qa="login-email"]').type(dados.usuarioIncorreto.email);
        cy.get('[data-qa="login-password"]').type(dados.usuarioIncorreto.password);
        cy.get('[data-qa="login-button"]').click();
    });
})

Cypress.Commands.add('verificarErroLogin3', () => {
    cy.contains('p','Your email or password is incorrect!').should('be.visible');
});

