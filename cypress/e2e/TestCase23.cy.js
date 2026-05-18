describe('template spec', () => {
 
    it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
      cy.visitarURL23();
    })

    it('Verificar se é home page', () => {
      cy.verificaHomePage23();
    })

    it('Acessar a página de login', () => {
      cy.acessarPaginaLogin23();
    })

    it('Fazer o cadastro', () => {
      cy.signUp23();
    })

    it('Preencher os dados para criar conta', () => {
      cy.criarConta23();
    })

    it('Verificar se o usuário está logado', () => {
      cy.verificarUsuarioLogado23();
    })

    it('Colocar produtos no carrinho', () => {
      cy.colocarComprasNoCarrinho23();
    })

    it('Acessar o carrinho', () => {
      cy.acessarCarrinho23();
    })

    it('Verificar se está na página do carrinho', () => {
      cy.verificarPaginaCarrinho23();
    })

    it('Proseguir para checkout', () => {
      cy.proseguirParaCheckout23();
    })

    it('Verificar se o endereço de entrega está correto', () => {
      cy.verificarEnderessoEnvio23();
    })

    it('Verificar se o endereço de pagamento está correto', () => {
      cy.verificarEnderessoPagamento23();
    })

    it('Deletar conta', () => {
        cy.deletarConta23();
    })

    it('Verificar se a conta foi deletada', () => {
        cy.verificarContaDeletada23();
    })

})