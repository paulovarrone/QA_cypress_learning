describe('template spec', () => {
 
    it('Verificar home page' , () => {
        cy.visitarURL19();
    })

    it('Verificar home page' , () => {
        cy.verificarHomePage19();
    })

    it('Clicar btn view product' , () => {
        cy.clicarBtnViewProduct19();
    }   )

    it('Verificar marcas' , () => {
        cy.verificarMarcas19();
    })

    it('Clicar marca' , () => {
        cy.clicarMarca19();
    })

    it('Verificar produtos da marca' , () => {
        cy.verificarProdutosMarca19();
    })

    it('Clicar em outra marca' , () => {
        cy.clicarEmOutraMarca19();
    })

    it('Verificar produtos da outra marca' , () => {
        cy.verificarProdutosOutraMarca19();
    })

    


})