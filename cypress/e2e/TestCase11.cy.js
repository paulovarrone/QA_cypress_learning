describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURLdecimoPrim();
	})

	it('Clica no carrinho de compras, da scroll para o fim da pagina, verifica se tem o texto subscription, colocar o email da inscrição e clica no botao, no final verifica se a mensagem de sucesso apareceu', () => {
		cy.carrinhoCompras();
	})

})