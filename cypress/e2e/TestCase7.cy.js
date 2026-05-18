describe('template spec', () => {
 
  it('Visitar url', () => {
    cy.visitarURL7();
  })

  it('Verificar se estou na home page', () => {
    cy.verificarHome7();
  })

  it('Ir para pagina de casos de teste', () => {
    cy.irParaTestCases7();
  })

    it('Verificar se estou na pagina de pagina de casos de teste', () => {
		cy.verificarPaginaTestCases7();
	})






})