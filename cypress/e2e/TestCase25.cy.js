describe('template spec', () => {
 
    it('Entrar no site', () => {
        cy.visitarURL25();
    })

    it('Verificar se está na home', () => {
        cy.verificarHome25();
    })      

    it('Scrollar para o fim da página', () => {
        cy.scrollParaFimDaPagina25();
    })

    it('Verificar se tem a seção de Subscription', () => {
        cy.verificarSubscription25();
    })

    it('Scrollar para o topo da página', () => {
        cy.scrollParaTopoDaPagina25();
    })

    it('Verificar se o scroll para o topo da página funcionou', () => {
        cy.verificarScrollParaTopo25();
    })

})

