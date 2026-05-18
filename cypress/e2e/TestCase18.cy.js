describe('template spec', () => {
 
    it('Entrar no site' , () => {
        cy.visitarURL18();
    })

    it('Verificar home page' , () => {
        cy.verificarHomePage18();
    })

    it('Verificar categorias' , () => {
        cy.verificarCategorias18();
    })

    it('Clicar categoria feminina' , () => {
        cy.clicarCategoriaFeminina18();
    })

    it('Clicar subcategoria feminina' , () => {
        cy.clicarCategoriaAbaixoFeminina18();
    })

    it('Verificar produtos da categoria feminina' , () => {
        cy.verificarProdutosCategoriaFeminina18();
    })

    it('Clicar categoria masculina' , () => {
        cy.clicarSubcategoriaMasculina18();
    })

    it('Verificar produtos da categoria masculina' , () => {
        cy.verificarProdutosCategoriaMasculina18();
    })


})