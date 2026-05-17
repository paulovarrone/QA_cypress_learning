describe('template spec', () => {
 
    it('Verificar home page' , () => {
        cy.visitarURL19();
    })

    it('Clicar btn view product' , () => {
        cy.clicarBtnViewProduct();
    }   )

    it('Verificar marcas' , () => {
        cy.verificarMarcas();
    })

    it('Clicar marca' , () => {
        cy.clicarMarca();
    })

    it('Verificar produtos da marca' , () => {
        cy.verificarProdutosMarca();
    })

    it('Clicar em outra marca' , () => {
        cy.clicarEmOutraMarca();
    })

    it('Verificar produtos da outra marca' , () => {
        cy.verificarProdutosOutraMarca();
    })

    


})