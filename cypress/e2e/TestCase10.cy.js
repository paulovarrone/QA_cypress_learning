describe('template spec', () => {

	it('Visitar url', () => {
		cy.visitarURL10();
	})

	it('Verificar se esta na home', () => {
		cy.verificarHomePage10();
	})

	it('Descer para o fim da pagina', () => {
		cy.desceParaFimPagina10();
	})

	it('Se inscreve nas noticias e testa se foi cadastrado com exito', () => {
		cy.seInscreveDecimoTeste10();
	})

	it('Verificar se a inscrição foi feita com exito', () => {
		cy.verificarInscricao10();
	})
})