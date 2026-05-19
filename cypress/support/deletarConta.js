// Cypress.Commands.add('login99', () => {
//     cy.visit('http://automationexercise.com');
//     cy.get('a[href="/login"]').click();
//     cy.fixture('criarConta').then((dados) => {
//         cy.get('[data-qa="login-email"]').type(dados.Teste16Informacoes.email);
//         cy.get('[data-qa="login-password"]').type(dados.Teste16Informacoes.password);
//     });
//     cy.get('[data-qa="login-button"]').click();
// });

// Cypress.Commands.add('deletarConta99', () => {
//     cy.get('a[href="/delete_account"]').click();
//     cy.contains('b', 'Account Deleted!').should('be.visible');
//     cy.get('[data-qa="continue-button"]').click();
// });