const produtosID = [1, 2, 3, 4, 5];

Cypress.Commands.add('visitarURL23', () => {
    cy.visit('/');
})

Cypress.Commands.add('verificaHomePage23', () => {
    cy.get('#slider').should('be.visible');
});

Cypress.Commands.add('acessarPaginaLogin23', () => {
    cy.get('a[href="/login"]').click();
});

Cypress.Commands.add('signUp23', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.get('[data-qa="signup-name"]').type(dados.Teste23.name);
        cy.get('[data-qa="signup-email"]').type(dados.Teste23.email);
        cy.get('[data-qa="signup-button"]').click();
    })
});

Cypress.Commands.add('criarConta23', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.get('#id_gender1').click();
        cy.get('[data-qa="name"]').type(dados.Teste23.name2);
        cy.get('[data-qa="password"]').type(dados.Teste23.password);
        cy.get('#days').select('3');
        cy.get('#months').select('March');
        cy.get('#years').select('1996');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type(dados.Teste23.first_name);
        cy.get('#last_name').type(dados.Teste23.last_name);
        cy.get('#company').type(dados.Teste23.company);
        cy.get('#address1').type(dados.Teste23.address1);
        cy.get('#address2').type(dados.Teste23.address2);
        cy.get('#country').scrollIntoView().select('Canada');
        cy.get('#state').type(dados.Teste23.state);
        cy.get('#city').type(dados.Teste23.city);
        cy.get('#zipcode').type(dados.Teste23.zipcode);
        cy.get('#mobile_number').type(dados.Teste23.mobile_number);
        cy.get('[data-qa="create-account"]').click();
        cy.contains('b','Account Created!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        
    });
});

Cypress.Commands.add('verificarUsuarioLogado23', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.contains('a', `Logged in as ${dados.Teste23.first_name}${dados.Teste23.name2}`).should('be.visible');
    });
});

Cypress.Commands.add('colocarComprasNoCarrinho23', () => {
    produtosID.forEach((id) => {
        cy.get(`[data-product-id="${id}"]`).eq(0).click();
        cy.contains('Continue Shopping').click();
    }); 
});

Cypress.Commands.add('acessarCarrinho23', () => {
    cy.contains('a[href="/view_cart"]','Cart').click();

});

Cypress.Commands.add('verificarPaginaCarrinho23', () => {
    cy.url().should('include', '/view_cart');
    
});

Cypress.Commands.add('proseguirParaCheckout23', () => {
    cy.contains('a','Proceed To Checkout').click();
});

Cypress.Commands.add('verificarEnderessoEnvio23', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.contains('h3', 'Your delivery address').should('be.visible');
        
        cy.get('#address_delivery').within(() => {
            
            cy.contains('li', `${dados.Teste23.first_name} ${dados.Teste23.last_name}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste23.address1}`).should('be.visible');
            cy.contains('li', `${dados.Teste23.address2}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste23.city} ${dados.Teste23.state} ${dados.Teste23.zipcode}`).should('be.visible');

            cy.contains('li', dados.Teste23.country).should('be.visible');
            cy.contains('li', dados.Teste23.phone).should('be.visible');
        });
        
        
    });

});

Cypress.Commands.add('verificarEnderessoPagamento23', () => {
    cy.fixture('criarConta').then((dados) => {
        cy.contains('h3', 'Your billing address').should('be.visible');
        
        cy.get('#address_invoice').within(() => {
            
            cy.contains('li', `${dados.Teste23.first_name} ${dados.Teste23.last_name}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste23.address1}`).should('be.visible');
            cy.contains('li', `${dados.Teste23.address2}`).should('be.visible');
            
            cy.contains('li', `${dados.Teste23.city} ${dados.Teste23.state} ${dados.Teste23.zipcode}`).should('be.visible');

            cy.contains('li', dados.Teste23.country).should('be.visible');
            cy.contains('li', dados.Teste23.phone).should('be.visible');
        });
        
        
    });

});


Cypress.Commands.add('deletarConta23', () => {
    cy.get('a[href="/delete_account"]').click()
});

Cypress.Commands.add('verificarContaDeletada23', () => {
    cy.contains('b','Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
});
