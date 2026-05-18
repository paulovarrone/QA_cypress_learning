describe('template spec', () => {
 
    it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
        cy.visitarURL26();
    })

    it('Scrollar para o fim da página', () => {
        cy.scrollParaFimDaPagina();
    })

    it('Verificar se tem a seção de Subscription', () => {
        cy.verificarSubscription();
    })

    it('Scrollar para o topo da página', () => {
        cy.scrollParaTopoDaPagina();
    })

    it('Verificar se o scroll para o topo da página funcionou', () => {
        cy.verificarScrollParaTopo();
    })



})

