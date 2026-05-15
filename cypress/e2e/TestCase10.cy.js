describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURLDecimoTeste();
	})

	it('Descer para o fim da pagina', () => {
		cy.desceParaFimPagina();
	})

	it('Se inscreve nas noticias e testa se foi cadastrado com exito', () => {
		cy.seInscreveDecimoTeste();
	})

	it('Verificar se a inscrição foi feita com exito', () => {
		cy.verificarInscricao();
	})
})