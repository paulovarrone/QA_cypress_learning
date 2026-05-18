describe('template spec', () => {
 
    it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
        cy.visitarURL16();
    })

    it('Verificar home page', () => {
        cy.verificarHome16();
    })

    it('Acessar a página de login', () => {
        cy.acessarPaginaLogin16();
    })

    it('Realizar login', () => {
        cy.realizarLogin16();
    })

    it('Verificar se o usuário está logado', () => {
        cy.VerificarUsuarioLogado16();
    })

    it('Colocar produtos no carrinho e acessar o checkout', () => {
        cy.colocarComprasNoCarrinho16();
    })

    it('Verificar as informações de entrega e seguir para pagamento', () => {
        cy.verificarInfosEseguirParaPagamento16();
    })

    it('Realizar pagamento', () => {
        cy.realizarPagamento16();
    })

    it('Deletar conta', () => {
        cy.deletarConta16();
    })




})