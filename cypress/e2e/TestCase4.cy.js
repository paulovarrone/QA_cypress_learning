describe('template spec', () => {
 
  it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
    cy.visitarURL4();
  })

  it('Verificar se tem o slider para se certificar que é a home', () => {
    cy.verificaHome4();
  })

  it('Clicar no botão de login', () => {
    cy.vaiParaPaginaLogin4();
  })

  it('Verificar se tem o texto "Login to your account" para se certificar que é a página de login', () => {
    cy.verificarLogin4();
  })

  it('Preencher os campos de email e senha e clicar no botão de login', () => {
    cy.logarNaConta4();
  })

  it('Verificar se tem o texto "Logged in as" para se certificar que o login foi realizado', () => {
    cy.verificarUsuarioLogado4();
  })

  it('Clicar no botão de logout', () => {
    cy.deslogar4();
  })

  it('Verificar se o usuário está deslogado', () => {
    cy.verificarDeslogado4();
  })

})
