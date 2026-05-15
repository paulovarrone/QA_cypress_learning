// cypress/support/commands.js
//////////////////////////////////////
Cypress.Commands.add('visitarURL', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('verificarNovoUsuario', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();
    cy.contains('h2', 'New User Signup!').should('be.visible');  
})

Cypress.Commands.add('criarConta', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.verificarNovoUsuario();
        cy.get('[placeholder="Name"]').type(dados.usuarioCorreto.name);
        cy.get('[data-qa="signup-email"]').type(dados.usuarioCorreto.email);
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('b','Enter Account Information').should('be.visible');
        cy.get('#id_gender1').click();
        cy.get('[data-qa="name"]').type(dados.usuarioCorreto.name2);
        cy.get('[data-qa="password"]').type(dados.usuarioCorreto.password);
        cy.get('#days').select('3');
        cy.get('#months').select('March');
        cy.get('#years').select('1996');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type(dados.usuarioCorreto.first_name);
        cy.get('#last_name').type(dados.usuarioCorreto.last_name);
        cy.get('#company').type(dados.usuarioCorreto.company);
        cy.get('#address1').type(dados.usuarioCorreto.address1);
        cy.get('#address2').type(dados.usuarioCorreto.address2);
        cy.get('#country').scrollIntoView().select('Canada');
        cy.get('#state').type(dados.usuarioCorreto.state);
        cy.get('#city').type(dados.usuarioCorreto.city);
        cy.get('#zipcode').type(dados.usuarioCorreto.zipcode);
        cy.get('#mobile_number').type(dados.usuarioCorreto.mobile_number);
        cy.get('[data-qa="create-account"]').click();
        cy.contains('b','Account Created!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('a', 'Logged in as junior123456').should('be.visible');
        cy.get('a[href="/delete_account"]').click()
        cy.contains('b','Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    });
})

