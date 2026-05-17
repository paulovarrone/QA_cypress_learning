Cypress.Commands.add('visitarURL21', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('clicarBtnProducts', () => {
    cy.get('a[href="/products"]').click();
})

Cypress.Commands.add('clicarBtnViewProduct', () => {
    cy.contains('h2','All Products').should('be.visible');
})

Cypress.Commands.add('clicarViewProduct', () => {
    cy.get('a[href="/product_details/2"]').click();
})

Cypress.Commands.add('verificarEscreverReview', () => {
    cy.contains('a', 'Write Your Review').should('be.visible');
})

Cypress.Commands.add('escreverReview', () => {
    cy.fixture('review').then((review) => {
        cy.get('#name').type(review.comentario.nome);
        cy.get('#email').type(review.comentario.email);
        cy.get('#review').type(review.comentario.mensagem);
        cy.get('#button-review').click();
    });
})

Cypress.Commands.add('verificarMensagemSucesso', () => {
    cy.contains('span', 'Thank you for your review.').should('be.visible');
})