describe('template spec', () => {

	it('Visitar url', () => {
		cy.visitarURL13();
	})

	it('Verificar se esta na home', () => {
		cy.verificarHome13();
	})

	it('Entrar em detalhes do produto', () => {
		cy.entrarEmDetalhesDoProduto13();
	})

	it('Adicionar produto ao carrinho', () => {
		cy.adicionarProdutoAoCarrinho13();
	})

	it('Verificar quantidade adicionada', () => {
		cy.verificarQuantidadeAdicionada13();
	})

	
   
})


