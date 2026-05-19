Cypress.Commands.add('visitarURL21', () => {
    cy.visit('/');
    
})

Cypress.Commands.add('verificarHome21', () => {
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('clicarBtnProducts21', () => {
    cy.get('a[href="/products"]').click();
})

Cypress.Commands.add('clicarBtnViewProduct21', () => {
    cy.contains('h2','All Products').should('be.visible');
})

Cypress.Commands.add('clicarViewProduct21', () => {
    cy.get('a[href="/product_details/2"]').click();
})

Cypress.Commands.add('verificarEscreverReview21', () => {
    cy.contains('a', 'Write Your Review').should('be.visible');
})

Cypress.Commands.add('escreverReview21', () => {
    cy.fixture('review').then((review) => {
        cy.get('#name').type(review.comentario.nome);
        cy.get('#email').type(review.comentario.email);
        cy.get('#review').type(review.comentario.mensagem);
        cy.get('#button-review').click();
    });
})

Cypress.Commands.add('verificarMensagemSucesso21', () => {
    cy.contains('span', 'Thank you for your review.').should('be.visible');
})