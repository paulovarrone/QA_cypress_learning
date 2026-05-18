describe('template spec', () => {
 
    it('Entrar no site', () => {
        cy.visitarURL26();
    })

    it('Verificar se é home page', () => {
        cy.verificarHome26();
    })

    it('Scrollar para o fim da página', () => {
        cy.scrollParaFimDaPagina26();
    })

    it('Verificar se tem a seção de Subscription', () => {
        cy.verificarSubscription26();
    })

    it('Scrollar para o topo da página', () => {
        cy.scrollParaTopoDaPagina26();
    })

    it('Verificar se o scroll para o topo da página funcionou', () => {
        cy.verificarScrollParaTopo26();
    })



})

