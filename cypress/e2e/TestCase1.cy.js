describe('template spec', () => {
 
  it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
    cy.visitarURL();
  })

  it('Verificar se é novo usuário', () => {
    cy.verificarNovoUsuario();
  })

  it('Criar conta e deletar no final', () => {
    cy.criarConta();
  })









})