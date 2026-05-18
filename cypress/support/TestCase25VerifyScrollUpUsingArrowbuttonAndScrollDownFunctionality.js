Cypress.Commands.add('visitarURL26', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('scrollParaFimDaPagina', () => {
    cy.scrollTo('bottom');
})

Cypress.Commands.add('verificarSubscription', () => {
    cy.contains('h2','Subscription').should('be.visible');
})

Cypress.Commands.add('scrollParaTopoDaPagina', () => {
    cy.get('#scrollUp').click();
})

Cypress.Commands.add('verificarScrollParaTopo', () => {
    cy.window().its('scrollY').should('equal', 0);
    cy.contains('h2','Full-Fledged practice website for Automation Engineers').should('be.visible');
})
