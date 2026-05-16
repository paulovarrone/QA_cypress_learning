describe('template spec', () => {
 
    it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
        cy.visitarURL16();
    })

    it('Colocar produtos de id 1, 2, 3, 4 e 5 no carrinho', () => {
        cy.colocarProdutosNoCarrinho();
    })

    it('Ir para o carrinho', () => {
        cy.irParaOCarrinho();
    })

    it('Remover produto de id 2(Men Tshirt) e 5(Winter Top) do carrinho', () => {
        cy.removerProdutoEspecificoDoCarrinho();
    })

    it('Verificar se o produto 2(Men Tshirt) e 5(Winter Top) foram removidos', () => {
        cy.verificarProdutoRemovido();
    })


})