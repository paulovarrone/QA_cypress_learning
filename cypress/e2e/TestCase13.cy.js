describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL13();
	})

	it('Entrar em detalhes do produto', () => {
		cy.entrarEmDetalhesDoProduto();
	})

	it('Adicionar produto ao carrinho', () => {
		cy.adicionarProdutoAoCarrinho();
	})

	it('Verificar quantidade adicionada', () => {
		cy.verificarQuantidadeAdicionada();
	})

	
   
})


