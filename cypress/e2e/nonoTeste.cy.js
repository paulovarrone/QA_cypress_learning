describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURLNonoTeste();
	})

	it('Testar busca por produto', () => {
        cy.verificarProdutosNonoTeste();
    });

    it('Buscar produtos por nome', () => {
        cy.buscarProdutoNome();
        
    });

})