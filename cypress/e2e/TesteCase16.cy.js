describe('template spec', () => {
 
    it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
        cy.visitarURL16();
    })

    it('Acessar a página de login', () => {
        cy.acessarPaginaLogin();
    })

    it('Realizar login', () => {
        cy.realizarLogin();
    })

    it('Verificar se o usuário está logado', () => {
        cy.VerificarUsuarioLogado();
    })

    it('Colocar produtos no carrinho e acessar o checkout', () => {
        cy.colocarComprasNoCarrinho();
    })

    it('Verificar as informações de entrega e seguir para pagamento', () => {
        cy.verificarInfosEseguirParaPagamento();
    })

    it('Realizar pagamento', () => {
        cy.realizarPagamento();
    })

    it('Deletar conta', () => {
        cy.deletarConta();
    })




})