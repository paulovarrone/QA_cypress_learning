describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL13();
	})

	it('Entra no produto, verifica detalhes, coloca 4 no carrinho e verifica no carrinho se a quantidade está correta.', () => {
		cy.verificarQuantidade();     
	})

   
})