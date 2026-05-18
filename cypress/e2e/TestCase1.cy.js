describe('template spec', () => {
 
  it('Entrar no site ', () => {
    cy.visitarURL1();
  })

  it('Verificar se a home foi carregada', () => {
    cy.verificarHome1();
  })

  it('Verificar se é novo usuário', () => {
    cy.verificarNovoUsuario1();
  })

  it('Criar conta ', () => {
    cy.criarConta1();
  })

  it('Verificar se a conta foi criada', () => {
    cy.verificarContaCriada1();
  })

  it('Verificar se o usuário está logado', () => {
    cy.verificarUsuarioLogado1();
  })

  it('Deletar conta', () => {
    cy.deletarConta1();
  })

  it('Verificar se a conta foi deletada', () => {
    cy.verificarContaDeletada1();
  })
})

