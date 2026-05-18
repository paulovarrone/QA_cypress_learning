describe('template spec', () => {
 
    it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
        cy.visitarURL24();
    })

    it('Colocar compras no carrinho', () => {
        cy.colocarComprasNoCarrinho();
    })


    it('Acessar a página de login', () => {
        cy.acessarPaginaLogin();
    })

    it('Realizar cadastro', () => {
        cy.signUp();
    })

    it('Preencher informações para criar conta', () => {
        cy.criarConta15();
    })

    it('Voltar ao carrinho e seguir para checkout', () => {
        cy.voltarAoCarrinho();
    })

    it('Verificar informações de entrega e seguir para pagamento', () => {
        cy.verificarInfosEseguirParaPagamento();
    })

    it('Realizar pagamento', () => {
        cy.realizarPagamento();
    })


    it('Baixar fatura', () => {
        cy.baixarFatura();
    })

    it('Deletar conta', () => {
        cy.deletarConta();
    })

})






