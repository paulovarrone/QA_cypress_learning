describe('template spec', () => {

	it('Visitar url', () => {
		cy.visitarURL11();
	})

	it('Verificar se esta na home', () => {
		cy.verificarHome11();
	})

	it('Entrar na pagina do carrinho', () => {
		cy.entrarNaPaginaDoCarrinho11();
	})

	it('Scroll para o fim da pagina', () => {
		cy.scrollParaFimDaPagina11();
	})

	it('Verificar se tem o texto subscription', () => {
		cy.verificarVisibilidadeInscricao11();
	})

	it('Realizar a inscrição', () => {
		cy.realizarInscricao11();
	})

	it('Verificar mensagem de sucesso', () => {
		cy.verificarMensagemSucesso11();
	})

})

