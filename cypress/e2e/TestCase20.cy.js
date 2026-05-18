describe('template spec', () => {
 
    it('Verificar home page' , () => {
        cy.visitarURL20();
    })

    it('Verificar home page' , () => {
        cy.verificarHomePage20();
    })

    it('Clicar btn view product' , () => {
        cy.clicarBtnLogin20();
    })

    it('Verificar btn view product' , () => {
        cy.pesquisarProduto20();
    })

    it('Digitar produto' , () => {
        cy.digitarProduto20();
    })

    it('Verificar produto pesquisado' , () => {
        cy.verificarProdutoPesquisado20();
    })

    it('Verificar produto procurado' , () => {
        cy.verificarProdutoProcurado20();
    })

    it('Colocar produto no carrinho' , () => {
        cy.colocarProdutoNoCarrinho20();
    })

    it('Ir ao carrinho e verificar se o produto está presente' , () => {
        cy.irAoCarrinho20();
    })

    it('Realizar login' , () => {
        cy.realizarLogin20();
    })

    it('Voltando ao carrinho' , () => {
        cy.irAoCarrinhoSemVerificar20();
    })

    it('Verificar produto no carrinho' , () => {
        cy.verificarProdutoNoCarrinho20();
    })



})

