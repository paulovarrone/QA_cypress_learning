describe('template spec', () => {
 
    it('Entrar no site', () => {
        cy.visitarURL24();
    })

    it('Colocar compras no carrinho', () => {
        cy.colocarComprasNoCarrinho24();
    })

    it('Acessar a página de login', () => {
        cy.acessarPaginaLogin24();
    })

    it('Realizar cadastro', () => {
        cy.signUp24();
    })

    it('Preencher informações para criar conta', () => {
        cy.criarConta24();
    })

    it('Voltar ao carrinho e seguir para checkout', () => {
        cy.voltarAoCarrinho24();
    })

    it('Verificar informações de entrega e seguir para pagamento', () => {
        cy.verificarInfosEseguirParaPagamento24();
    })

    it('Realizar pagamento', () => {
        cy.realizarPagamento24();
    })


    it('Baixar fatura', () => {
        cy.baixarFatura24();
    })

    it('Deletar conta', () => {
        cy.deletarConta24();
    })

});






