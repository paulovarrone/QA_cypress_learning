describe('template spec', () => {
 
  it('Entrar no site', () => {
    cy.visitarURL3();
  })

  it('Verificar se está na página inicial', () => {
    cy.verificarHome3();
  })

  it('Ir para a página de login', () => {
    cy.irParaPaginaLogin3();
  })

  it('Verificar página de login', () => {
    cy.verificarLogin3();
  })

  it('Logar na conta com credenciais inválidas', () => {
    cy.logarNaContaErro3();
  })

  it('Verificar mensagem de erro de login', () => {
    cy.verificarErroLogin3();
  })

})

