describe('template spec', () => {
 
  it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
    cy.visitarURLTerceiroTeste();
  })

  it('Logar na conta com credenciais inválidas', () => {
    cy.logarNaContaErroTerceiroTeste();
  })









})