// Cypress.Commands.add('visitarURL99', () => {
//     cy.visit('http://automationexercise.com');
//     cy.get('a[href="/login"]').click();
//     cy.fixture('criarConta').then((dados) => {
//         cy.get('[data-qa="signup-name"]').type(dados.Teste16Informacoes.name);
//         cy.get('[data-qa="signup-email"]').type(dados.Teste16Informacoes.email);
//     });
//     cy.get('[data-qa="signup-button"]').click();
// });

// Cypress.Commands.add('criarConta99', () => {
//     cy.fixture('criarConta').then((dados) => {
//         cy.get('#id_gender1').click();
//         cy.get('[data-qa="name"]').type(dados.Teste16Informacoes.name);
//         cy.get('[data-qa="password"]').type(dados.Teste16Informacoes.password);
//         cy.get('#days').select('3');
//         cy.get('#months').select('March');
//         cy.get('#years').select('1996');
//         cy.get('#newsletter').click();
//         cy.get('#optin').click();
//         cy.get('#first_name').type(dados.Teste16Informacoes.first_name);
//         cy.get('#last_name').type(dados.Teste16Informacoes.last_name);
//         cy.get('#company').type(dados.Teste16Informacoes.company);
//         cy.get('#address1').type(dados.Teste16Informacoes.address1);
//         cy.get('#address2').type(dados.Teste16Informacoes.address2);
//         cy.get('#country').scrollIntoView().select('Canada');
//         cy.get('#state').type(dados.Teste16Informacoes.state);
//         cy.get('#city').type(dados.Teste16Informacoes.city);
//         cy.get('#zipcode').type(dados.Teste16Informacoes.zipcode);
//         cy.get('#mobile_number').type(dados.Teste16Informacoes.mobile_number);
//         cy.get('[data-qa="create-account"]').click();
//         cy.contains('b','Account Created!').should('be.visible');
//         cy.get('[data-qa="continue-button"]').click();
//         cy.contains('a', `Logged in as ${dados.Teste16Informacoes.first_name}${dados.Teste16Informacoes.last_name}`).should('be.visible');
//     });
// });