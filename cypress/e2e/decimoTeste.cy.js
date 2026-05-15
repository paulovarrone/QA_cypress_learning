describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURLDecimoTeste();
	})

	it('Vai para o fim da pagina, se inscreve nas noticias e testa se foi cadastrado com exito', () => {
		cy.seInscreveDecimoTeste();
	})

})