describe('template spec', () => {
 
    it('Verificar home page' , () => {
        cy.visitarURL21();
    })

    it('Verificar home page' , () => {
        cy.verificarHome21();
    })

    it('Clicar btn view product' , () => {
        cy.clicarBtnProducts21();
    }   )

    it('Verificar btn view product' , () => {
        cy.clicarBtnViewProduct21();
    })

    it('Clicar view product' , () => {
        cy.clicarViewProduct21();
    })

    it('Verificar texto escrever review' , () => {
        cy.verificarEscreverReview21();
    })

    it('Escrever review' , () => {
        cy.escreverReview21();
    })

    it('Verificar mensagem de sucesso' , () => {
        cy.verificarMensagemSucesso21();
    })


})