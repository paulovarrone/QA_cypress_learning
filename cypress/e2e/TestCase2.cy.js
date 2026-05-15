describe('template spec', () => {
 
  it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
    cy.visitarURLSegundoTeste();
  })

  it('Criar usuário', () => {
    cy.CriarUsuarioSegundoTeste();
  })

  it('Verifica o login', () => {
    cy.verificarLoginSegundoTeste();
  })

  it('Vai logar na conta e deletar no final', () => {
    cy.logarNaContasSegundoTeste();
  })










})