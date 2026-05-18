describe('template spec', () => {
 
  it('Entrar no site', () => {
    cy.visitarURL2();
  })

  it('Verificar que a home page foi carregada com sucesso', () => {
    cy.verificarHome2();
  })

  it('Criar um usuário', () => {
    cy.CriarUsuario2();
  })

  it('Verificar que a página de login foi carregada com sucesso', () => {
    cy.verificarLogin2();
  })

  it('Logar na conta criada', () => {
    cy.logarNaContas2();
  })

  it('Verificar que o login foi realizado com sucesso', () => {
    cy.verificarLoginRealizado2();
  })

  it('Deletar a conta criada', () => {
    cy.deletarConta2();
  })

  it('Verificar que a conta foi deletada com sucesso', () => {
    cy.verificarDeletarConta2();
  })

})

