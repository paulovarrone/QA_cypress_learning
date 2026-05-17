describe('template spec', () => {
 
    it('Verificar home page' , () => {
        cy.visitarURL21();
    })

    it('Clicar btn view product' , () => {
        cy.clicarBtnProducts();
    }   )

    it('Verificar btn view product' , () => {
        cy.clicarBtnViewProduct();
    })

    it('Clicar view product' , () => {
        cy.clicarViewProduct();
    })

    it('Verificar texto escrever review' , () => {
        cy.verificarEscreverReview();
    })

    it('Escrever review' , () => {
        cy.escreverReview();
    })

    it('Verificar mensagem de sucesso' , () => {
        cy.verificarMensagemSucesso();
    })


})