describe('template spec', () => {
 
    it('Verificar home page' , () => {
        cy.visitarURL18();
    })

    it('Verificar categorias' , () => {
        cy.verificarCategorias();
    })

    it('Clicar categoria feminina' , () => {
        cy.clicarCategoriaFeminina();
    })

    it('Clicar subcategoria feminina' , () => {
        cy.clicarCategoriaAbaixoFeminina();
    })

    it('Verificar produtos da categoria feminina' , () => {
        cy.verificarProdutosCategoriaFeminina();
    })

    it('Clicar categoria masculina' , () => {
        cy.clicarSubcategoriaMasculina();
    })

    it('Verificar produtos da categoria masculina' , () => {
        cy.verificarProdutosCategoriaMasculina();
    })


})