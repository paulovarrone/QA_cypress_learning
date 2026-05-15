describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL12();
	})

	it('Entra em produtos e verifica visibilidade', () => {
		cy.entraEmProdutos();
	})

	it('Hover e adicionar produtos ao carrinho', () => {
		cy.hoverEAdicionarProdutosAoCarrinho();
	})

	it('Entrar no carrinho e verificar visibilidade dos produtos', () => {
		cy.entrarNoCarrinhoVerificaVisibilidadeProdutos();
	})

	it('Verificar detalhes dos produtos no carrinho', () => {
		cy.verificarDetalhesProdutosNoCarrinho();
	})

	it('Prosseguir para checkout', () => {
		cy.prosseguirParaCheckout();
	})

   
})




