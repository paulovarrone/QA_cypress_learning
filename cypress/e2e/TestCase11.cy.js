describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURLdecimoPrim();
	})

	it('Entrar na pagina do carrinho', () => {
		cy.entrarNaPaginaDoCarrinho();
	})

	it('Scroll para o fim da pagina', () => {
		cy.scrollParaFimDaPagina();
	})

	it('Verificar se tem o texto subscription', () => {
		cy.verificarVisibilidadeInscricao();
	})

	it('Realizar a inscrição', () => {
		cy.realizarInscricao();
	})

	it('Verificar mensagem de sucesso', () => {
		cy.verificarMensagemSucesso();
	})

})

