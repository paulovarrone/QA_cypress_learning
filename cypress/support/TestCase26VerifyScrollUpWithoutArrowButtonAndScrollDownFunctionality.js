Cypress.Commands.add('visitarURL26', () => {
    cy.visit('/');   
})

Cypress.Commands.add('verificarHome26', () => {
    cy.get('#slider').should('be.visible');
})


Cypress.Commands.add('scrollParaFimDaPagina26', () => {
    cy.scrollTo('bottom');
})

Cypress.Commands.add('verificarSubscription26', () => {
    cy.contains('h2','Subscription').should('be.visible');
})

Cypress.Commands.add('scrollParaTopoDaPagina26', () => {
    cy.scrollTo('top');
})

Cypress.Commands.add('verificarScrollParaTopo26', () => {
    cy.window().its('scrollY').should('equal', 0);
    cy.contains('h2','Full-Fledged practice website for Automation Engineers').should('be.visible');
})