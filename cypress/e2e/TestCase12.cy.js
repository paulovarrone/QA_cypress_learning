describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL12();
	})

	it('Vai em produtos, hover em dois produtos, clica adiciona os dois ao carrinho e verifica preço, quantidade e total', () => {
		cy.adicionarAoCarrinho();     
	})

   
})