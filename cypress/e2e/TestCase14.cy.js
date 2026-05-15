describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL14();
	})

	it('Colocar compras no carrinho', () => {
		cy.visitarURL14();
        cy.colocarComprasNoCarrinho();     
	})

    it('Fazer login', () => {
        cy.visitarURL14();
		cy.colocarComprasNoCarrinho();   
        cy.realizarOsignUp();  
	})

    it('Criar conta de novo usuario', () => {
        cy.visitarURL14();
        cy.colocarComprasNoCarrinho();   
        cy.realizarOsignUp();
        cy.criarConta14();     
	})

    it('Verificar carrinho de compras e ir para pagamento', () => {
        cy.visitarURL14();
        cy.colocarComprasNoCarrinho();   
        cy.realizarOsignUp();
        cy.criarConta14();
        cy.verificarCarrinhoDeCompras();   
	})

    it('Verificar informações de entrega e ir para pagamento', () => {
        cy.visitarURL14();
        cy.colocarComprasNoCarrinho();   
        cy.realizarOsignUp();
        cy.criarConta14();
        cy.verificarCarrinhoDeCompras();   
        cy.verificarInfosEseguirParaPagamento();
	})

    it('Realizar pagamento', () => {
        cy.visitarURL14();
        cy.colocarComprasNoCarrinho();   
        cy.realizarOsignUp();
        cy.criarConta14();
        cy.verificarCarrinhoDeCompras();   
        cy.verificarInfosEseguirParaPagamento();
        cy.realizarPagamento();
	})

    it('Deletar conta', () => {
        cy.deletarConta();
    });

   
})