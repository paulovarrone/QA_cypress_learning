describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL9();
	})

    it('Verificar se esta na home', () => {
        cy.verificarHome9();
    });

	it('Testar busca por produto', () => {
        cy.verificarProdutos9();
    });

    it('Buscar produtos por nome', () => {
        cy.buscarProdutoNome9();
        
    });

    it('Verificar se o produto foi encontrado', () => {
        cy.verificarProdutoEncontrado9 ();
    });

})