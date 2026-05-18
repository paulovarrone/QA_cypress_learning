describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL8();
	})

	it('Verificar se esta na home', () => {
		cy.verificarHome8();
	})

	it('Verificar pagina de produtos e se estao visiveis', () => {
		cy.verificarProdutos8();
	})

	it('clicar no primeiro produto e verificar se as informacoes estao visiveis ', () => {
		cy.verificarPrimeiroProduto8();
	})

	it('Verificar detalhes do primeiro produto', () => {
		cy.verificarDetalhesProduto8();
	})

})



