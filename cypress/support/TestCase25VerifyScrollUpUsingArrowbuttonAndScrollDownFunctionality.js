Cypress.Commands.add('visitarURL25', () => {
    cy.visit('/');
    
})

Cypress.Commands.add('verificarHome25', () => {
    cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('scrollParaFimDaPagina25', () => {
    cy.scrollTo('bottom');
})

Cypress.Commands.add('verificarSubscription25', () => {
    cy.contains('h2','Subscription').should('be.visible');
})

Cypress.Commands.add('scrollParaTopoDaPagina25', () => {
    cy.get('#scrollUp').click();
})

Cypress.Commands.add('verificarScrollParaTopo25', () => {
    cy.window().its('scrollY').should('equal', 0);
    cy.contains('h2','Full-Fledged practice website for Automation Engineers').should('be.visible');
})
