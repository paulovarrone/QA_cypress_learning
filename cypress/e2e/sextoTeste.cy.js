describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURLSextoTeste();
	})

	it('Entrar em contact us', () => {
		cy.contactUSSextoTeste();
	})

	it('Preencher informações', () => {
		cy.preencherInfoseEnviarSextoTeste();
	})

	it('Preencher informações, verificar se está ok, se teve sucesso e voltar a home', () => {
		cy.successSextoTeste();
	})

})