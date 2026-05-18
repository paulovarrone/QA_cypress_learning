describe('Quinto Teste', () => {

    it('Visitar URL', () => {
        cy.visitarURL5();
    })

    it('Verificar que a home page foi carregada', () => {
        cy.verificarHome5();
    })

    it('Visitar a página de login', () => {
        cy.visitarLogin5();
    })

    it('Verificar que a página de cadastro foi carregada', () => {
        cy.verificarSignUp5();
    })

    it('Tentar criar uma conta com um email já existente', () => {
        cy.criacaoExistente5();
    })

    it('Verificar que a mensagem de erro foi exibida', () => {
        cy.verificarExistente5();
    })

})
