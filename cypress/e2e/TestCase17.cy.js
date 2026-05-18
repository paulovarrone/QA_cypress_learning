describe('template spec', () => {
 
    it('Entrar no site', () => {
        cy.visitarURL17();
    })

    it('Verificar home page', () => {
        cy.verificarHome17();
    })

    it('Colocar produtos de id 1, 2, 3, 4 e 5 no carrinho', () => {
        cy.colocarProdutosNoCarrinho17();
    })

    it('Ir para o carrinho', () => {
        cy.irParaOCarrinho17();
    })

    it('Remover produto de id 2(Men Tshirt) e 5(Winter Top) do carrinho', () => {
        cy.removerProdutoEspecificoDoCarrinho17();
    })

    it('Verificar se o produto 2(Men Tshirt) e 5(Winter Top) foram removidos', () => {
        cy.verificarProdutoRemovido17();
    })


})