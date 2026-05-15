describe('template spec', () => {
 
  it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
    cy.visitarURLQuartoTeste();
  })

  it('Criar usuário', () => {
    cy.CriarUsuarioQuartoTeste();
  })

  it('verificarLogin', () => {
    cy.verificarLoginQuartoTeste();
  })

  it('Logar na conta e deslogar', () => {
        cy.logarNaContaQuartoTeste();
  })



})