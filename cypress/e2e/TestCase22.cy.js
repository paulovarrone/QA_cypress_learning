describe('template spec', () => {
 
  it('Entrar no site e ver se tem slider para se sertificar que é a home', () => {
    cy.visitarURL22();
  })


    it('Scroll para o fim da página', () => {
      cy.scrollParaFimDaPagina();
    })

    it('Verificar se tem itens recomendados', () => {
      cy.verificarItensRecomendados();
    })

    it('Adicionar item recomendado ao carrinho', () => {
      cy.adicionarItemRecomendadoAoCarrinho();
    })

    it('Ir para o carrinho', () => {
      cy.irParaCarrinho();
    })

    it('Verificar se o produto adicionado está no carrinho', () => {
      cy.verificarProdutoNoCarrinho();
    })




})