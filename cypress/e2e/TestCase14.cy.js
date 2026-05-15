describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL14();
	})

	it('Colocar compras no carrinho', () => {
        cy.colocarComprasNoCarrinho();     
	})

    it('Fazer login', () => {
        cy.realizarOsignUp();  
	})

    it('Criar conta de novo usuario', () => {
        cy.criarConta14();     
	})

    it('Verificar carrinho de compras e ir para pagamento', () => {
        cy.verificarCarrinhoDeCompras();   
	})

    it('Verificar informações de entrega e ir para pagamento', () => {  
        cy.verificarInfosEseguirParaPagamento();
	})

    it('Realizar pagamento', () => {
        cy.realizarPagamento();
	})

    it('Deletar conta', () => {
        cy.deletarConta();
    });

   
})