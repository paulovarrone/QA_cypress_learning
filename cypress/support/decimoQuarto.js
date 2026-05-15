Cypress.Commands.add('visitarURL14', () => {
    cy.visit('http://automationexercise.com');
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('colocarComprasNoCarrinho', () => {
    cy.get(`[data-product-id="1"]`).eq(0).click();
    cy.contains('a[href="/view_cart"]','View Cart').click();
    cy.url().contains('/view_cart');
    cy.contains('a','Proceed To Checkout').click();
});

Cypress.Commands.add('realizarOsignUp', () => {
    cy.get('a[href="/login"]').click();
    cy.fixture('criarConta').then((dados) => {
        cy.get('data-qa="signup-name"').type(dados.usuarioCorreto.name);
        cy.get('data-qa="signup-email"').type(dados.usuarioCorreto.email);
    });
});

Cypress.Commands.add('criarConta14', () => {
    cy.fixture('criarConta').then((dados) => {
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
    });
});

Cypress.Commands.add('verificarCarrinhoDeCompras', () => {
    cy.contains('a[href="/view_cart"]','Cart').click();
    cy.contains('a','Proceed To Checkout').click();
});

Cypress.Commands.add('verificarInfosEseguirParaPagamento', () => {
    cy.fixture('usuario').then((dados) => {
        cy.contains('h3', 'Your delivery address').should('be.visible');
        
        cy.get('#address_delivery').within(() => {
            
            cy.contains('li', `${dados.usuarioCorreto.first_name} ${dados.usuarioCorreto.last_name}`).should('be.visible');
            
            cy.contains('li', `${dados.usuarioCorreto.address1} ${dados.usuarioCorreto.address2}`).should('be.visible');
            
            
            cy.contains('li', `${dados.usuarioCorreto.city}, ${dados.usuarioCorreto.state} ${dados.usuarioCorreto.zipcode}`).should('be.visible');

            cy.contains('li', dados.usuarioCorreto.country).should('be.visible');
            cy.contains('li', dados.usuarioCorreto.phone).should('be.visible');
        });
        
        
    });

    cy.fixture('pagamentos').then((dados) => {
        cy.get('.form-control').type(dados.dadosPagamento.textArea);
    });

    cy.get('a[href="/payment"]').click();
});

Cypress.Commands.add('realizarPagamento', () => {
    cy.fixture('pagamentos').then((dados) => {
        cy.get('[data-qa="name-on-card"]').type(dados.dadosPagamento.cardName);
        cy.get('[data-qa="card-number"]').type(dados.dadosPagamento.cardNumber);
        cy.get('[data-qa="expiry-month"]').select(dados.dadosPagamento.expiryMonth);
        cy.get('[data-qa="expiry-year"]').select(dados.dadosPagamento.expiryYear);
        cy.get('[data-qa="cvv"]').type(dados.dadosPagamento.cvv);
        cy.get('[data-qa="pay-button"]').click();
    });

    cy.contains('div' , 'Your order has been placed successfully!').should('be.visible');
});

Cypress.Commands.add('deletarConta', () => {
    cy.get('a[href="/delete_account"]').click()
    cy.contains('b','Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
});
