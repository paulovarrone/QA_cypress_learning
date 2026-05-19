Cypress.Commands.add('visitarURL6', () => {
	cy.visit('/');
	
})

Cypress.Commands.add('verificarHome6', () => {
	cy.get('#slider').should('be.visible');
})

Cypress.Commands.add('contactUs6', () => {
	cy.get('[href="/contact_us"]').click()
	cy.contains('h2', 'Get In Touch').should('be.visible');
})

Cypress.Commands.add('preencherInfoseEnviar6', () => {
	cy.fixture('formulario').then((dados) => {
		cy.get('[data-qa="name"]').type(dados.Forms.name);
		cy.get('[data-qa="email"]').type(dados.Forms.email);
		cy.get('[data-qa="subject"]').type(dados.Forms.subject);
		cy.get('[data-qa="message"]').type(dados.Forms.message);
		cy.get('[type="file"]').selectFile('cypress\\fixtures\\testeFoto.jpg');
		cy.get('[data-qa="submit-button"]').click(); 
	});
})

Cypress.Commands.add('success6', () => {
	cy.contains('div', 'Success!').should('be.visible');
	cy.get('a[class="btn btn-success"]').click();
})