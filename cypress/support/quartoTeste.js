Cypress.Commands.add('visitarURLQuartoTeste', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('CriarUsuarioQuartoTeste', () => {
    cy.fixture('criarConta').then((dados) => {	
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();   
        cy.contains('h2', 'New User Signup!').should('be.visible') 
        cy.get('[placeholder="Name"]').type(dados.usuarioCorreto.name);
        cy.get('[data-qa="signup-email"]').type(dados.Teste4.email);
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('b', 'Enter Account Information').should('be.visible')
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
        cy.get('a[data-qa="continue-button"]').click();
        cy.get('a[href="/logout"]').click();
    });
})

Cypress.Commands.add('verificarLoginQuartoTeste', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();
    cy.contains('h2','Login to your account').should('be.visible');
})

Cypress.Commands.add('logarNaContaQuartoTeste', () => {
    cy.verificarLoginQuartoTeste();
    cy.fixture('criarConta').then((dados) => {
        cy.get('[data-qa="login-email"]').type(dados.Teste4.email);
        cy.get('[data-qa="login-password"]').type(dados.Teste4.password);
        cy.get('[data-qa="login-button"]').click();
        cy.contains('a','Logged in as').should('be.visible');
        cy.get('a[href="/logout"]').click();
        cy.contains('h2','Login to your account').should('be.visible');
    });
    
})