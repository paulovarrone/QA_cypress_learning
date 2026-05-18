describe('template spec', () => {

	it('Visitar url', () => {
		cy.visitarURL12();
	})

	it('Verificar se esta na home', () => {
		cy.verificarHome12();
	})

	it('Entra em produtos e verifica visibilidade', () => {
		cy.entraEmProdutos12();
	})

	it('Hover e adicionar produtos ao carrinho', () => {
		cy.hoverEAdicionarProdutosAoCarrinho12();
	})

	it('Entrar no carrinho e verificar visibilidade dos produtos', () => {
		cy.entrarNoCarrinhoVerificaVisibilidadeProdutos12();
	})

	it('Verificar detalhes dos produtos no carrinho', () => {
		cy.verificarDetalhesProdutosNoCarrinho12();
	})

	it('Prosseguir para checkout', () => {
		cy.prosseguirParaCheckout12();
	})

   
})




