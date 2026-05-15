describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURLOitavoTeste();
	})

	it('Verificar pagina de produtos e se estao viziveis', () => {
		cy.verificarProdutos();
	})

	it('clicar no primeiro produto e verificar se as informacoes estao visiveis ', () => {
		cy.verificarPrimeiroProduto();
	})

	it('Verificar detalhes do primeiro produto', () => {
		cy.verificarDetalhesProduto();
	})

})



