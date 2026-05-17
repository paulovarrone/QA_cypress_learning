describe('template spec', () => {
 
    it('Verificar home page' , () => {
        cy.visitarURL20();
    })

    it('Clicar btn view product' , () => {
        cy.clicarBtnLogin();
    })

    it('Verificar btn view product' , () => {
        cy.pesquisarProduto();
    })

    it('Digitar produto' , () => {
        cy.digitarProduto();
    })

    it('Verificar produto pesquisado' , () => {
        cy.verificarProdutoPesquisado();
    })

    it('Verificar produto procurado' , () => {
        cy.verificarProdutoProcurado();
    })

    it('Colocar produto no carrinho' , () => {
        cy.colocarProdutoNoCarrinho();
    })

    it('Ir ao carrinho e verificar se o produto está presente' , () => {
        cy.irAoCarrinho();
    })

    it('Realizar login' , () => {
        cy.realizarLogin();
    })

    it('Voltando ao carrinho' , () => {
        cy.irAoCarrinhoSemVerificar();
    })

    it('Verificar produto no carrinho' , () => {
        cy.verificarProdutoNoCarrinho();
    })



})

