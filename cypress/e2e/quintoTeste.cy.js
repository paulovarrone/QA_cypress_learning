describe('Quinto Teste', () => {

    it('Entrar no site e verificar se tem slider para se certificar que é a home', () => {
        cy.visitarURLQuintoTeste();
    })

    it('Criar conta com credenciais que ja existem', () => {
	    cy.criacaoExistenteQuintoTeste();
    })


})