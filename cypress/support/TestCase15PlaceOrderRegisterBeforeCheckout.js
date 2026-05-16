const produtosID = [
    1,2,3,4,5
];

Cypress.Commands.add('visitarURL15', () => {
    cy.visit('http://automationexercise.com');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('acessarPaginaLogin', () => {
    cy.get('a[href="/login"]').click();
});

Cypress.Commands.add('realizarPreLogin', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.get('[data-qa="signup-name"]').type(dados.Teste15.name);
        cy.get('[data-qa="signup-email"]').type(dados.Teste15.email);
    });
    cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add('criarConta15', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.get('#id_gender1').click();
        cy.get('[data-qa="name"]').type(dados.Teste15.name2);
        cy.get('[data-qa="password"]').type(dados.Teste15.password);
        cy.get('#days').select('3');
        cy.get('#months').select('March');
        cy.get('#years').select('1996');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type(dados.Teste15.first_name);
        cy.get('#last_name').type(dados.Teste15.last_name);
        cy.get('#company').type(dados.Teste15.company);
        cy.get('#address1').type(dados.Teste15.address1);
        cy.get('#address2').type(dados.Teste15.address2);
        cy.get('#country').scrollIntoView().select('Canada');
        cy.get('#state').type(dados.Teste15.state);
        cy.get('#city').type(dados.Teste15.city);
        cy.get('#zipcode').type(dados.Teste15.zipcode);
        cy.get('#mobile_number').type(dados.Teste15.mobile_number);
        cy.get('[data-qa="create-account"]').click();
        cy.contains('b','Account Created!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('a', 'Logged in as junior123456').should('be.visible');
    });
});

Cypress.Commands.add('colocarComprasNoCarrinho', () => {

    produtosID.forEach((id) => {
        cy.get(`[data-product-id="${id}"]`).eq(0).click();
        cy.contains('Continue Shopping').click();
    });
    
    cy.contains('a[href="/view_cart"]','Cart').click();
    cy.url().should('include', '/view_cart');
    cy.contains('a','Proceed To Checkout').click();
});

Cypress.Commands.add('verificarInfosEseguirParaPagamento', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.contains('h3', 'Your delivery address').should('be.visible');
        
        cy.get('#address_delivery').within(() => {
            
            cy.contains('li', `${dados.Teste15.first_name} ${dados.Teste15.last_name}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste15.address1}`).should('be.visible');
            cy.contains('li', `${dados.Teste15.address2}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste15.city} ${dados.Teste15.state} ${dados.Teste15.zipcode}`).should('be.visible');

            cy.contains('li', dados.Teste15.country).should('be.visible');
            cy.contains('li', dados.Teste15.phone).should('be.visible');
        });
        
        
    });

    cy.fixture('pagamento').then((dados) => {
        cy.get('.form-control').type(dados.dadosPagamento.textArea);
    });

    cy.get('a[href="/payment"]').click();
});


Cypress.Commands.add('realizarPagamento', () => {
    cy.fixture('pagamento').then((dados) => {
        cy.get('[data-qa="name-on-card"]').type(dados.dadosPagamento.cardName);
        cy.get('[data-qa="card-number"]').type(dados.dadosPagamento.cardNumber);
        cy.get('[data-qa="cvc"]').type(dados.dadosPagamento.cvv);
        cy.get('[data-qa="expiry-month"]').type(dados.dadosPagamento.expiryMonth);
        cy.get('[data-qa="expiry-year"]').type(dados.dadosPagamento.expiryYear);
        cy.get('[data-qa="pay-button"]').click();   
    });
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
    
});


Cypress.Commands.add('deletarConta', () => {
    cy.get('a[href="/delete_account"]').click()
    cy.contains('b','Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
});
