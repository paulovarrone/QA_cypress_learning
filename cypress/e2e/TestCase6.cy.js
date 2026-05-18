describe('template spec', () => {

	it('Visitar url', () => {
		cy.visitarURL6();
	})

	it('Verificar se esta na home', () => {
		cy.verificarHome6();
	})

	it('Entrar em contact us', () => {
		cy.contactUs6();
	})

	it('Preencher informações', () => {
		cy.preencherInfoseEnviar6();
	})

	it('Preencher informações, verificar se está ok, se teve sucesso e voltar a home', () => {
		cy.success6();
	})

})