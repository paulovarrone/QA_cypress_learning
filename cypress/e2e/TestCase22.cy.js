describe('template spec', () => {
 
  it('Entrar no site', () => {
    cy.visitarURL22();
  })

  it('Verificar se está na página inicial', () => {
    cy.verificarPaginaInicial22();
  })

  it('Scroll para o fim da página', () => {
    cy.scrollParaFimDaPagina22();
  })

  it('Verificar se tem itens recomendados', () => {
    cy.verificarItensRecomendados22();
  })

  it('Adicionar item recomendado ao carrinho', () => {
    cy.adicionarItemRecomendadoAoCarrinho22();
  })

  it('Ir para o carrinho', () => {
    cy.irParaCarrinho22();
  })

  it('Verificar se o produto adicionado está no carrinho', () => {
    cy.verificarProdutoNoCarrinho22();
  })

})