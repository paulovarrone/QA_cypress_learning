const produtosID = [
    1,2,3,4,5
];

Cypress.Commands.add('visitarURL16', () => {
    cy.visit('/');
    
});

Cypress.Commands.add('verificarHome16', () => {
    cy.get('.active').should('be.visible');
});

Cypress.Commands.add('acessarPaginaLogin16', () => {
    cy.get('a[href="/login"]').click();
});

Cypress.Commands.add('realizarLogin16', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.get('[data-qa="login-email"]').type(dados.Teste16Informacoes.email);
        cy.get('[data-qa="login-password"]').type(dados.Teste16Informacoes.password);
    });

    cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('VerificarUsuarioLogado16', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.contains('a', `Logged in as ${dados.Teste16Informacoes.first_name}${dados.Teste16Informacoes.last_name}`).should('be.visible');
    });
});

Cypress.Commands.add('colocarComprasNoCarrinho16', () => {

    produtosID.forEach((id) => {
        cy.get(`[data-product-id="${id}"]`).eq(0).click();
        cy.contains('Continue Shopping').click();
    });
    
    cy.contains('a[href="/view_cart"]','Cart').click();
    cy.url().should('include', '/view_cart');
    cy.contains('a','Proceed To Checkout').click();
});

Cypress.Commands.add('verificarInfosEseguirParaPagamento16', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.contains('h3', 'Your delivery address').should('be.visible');
        
        cy.get('#address_delivery').within(() => {
            
            cy.contains('li', `${dados.Teste16Informacoes.first_name} ${dados.Teste16Informacoes.last_name}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste16Informacoes.address1}`).should('be.visible');
            cy.contains('li', `${dados.Teste16Informacoes.address2}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste16Informacoes.city} ${dados.Teste16Informacoes.state} ${dados.Teste16Informacoes.zipcode}`).should('be.visible');

            cy.contains('li', dados.Teste16Informacoes.country).should('be.visible');
            cy.contains('li', dados.Teste16Informacoes.phone).should('be.visible');
        });
        
        
    });

    cy.fixture('pagamento').then((dados) => {
        cy.get('.form-control').type(dados.dadosPagamento.textArea);
    });

    cy.get('a[href="/payment"]').click();
});

Cypress.Commands.add('realizarPagamento16', () => {
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


Cypress.Commands.add('deletarConta16', () => {
    cy.get('a[href="/delete_account"]').click()
    cy.contains('b','Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
});
