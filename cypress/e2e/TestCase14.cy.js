describe('template spec', () => {

	it('Visitar url', () => {
		cy.visitarURL14();
	})

    it('Verificar se esta na home page', () => {
        cy.verificarHomePage14();
    })

	it('Colocar compras no carrinho', () => {
        cy.colocarComprasNoCarrinho14();     
	})

    it('Fazer login', () => {
        cy.realizarOsignUp14();  
	})

    it('Criar conta de novo usuario', () => {
        cy.criarConta14();     
	})

    it('Verificar login', () => {
        cy.verificarLogin14();
    })

    it('Verificar carrinho de compras e ir para pagamento', () => {
        cy.verificarCarrinhoDeCompras14();   
	})

    it('Verificar informações de entrega e ir para pagamento', () => {  
        cy.verificarInfosEseguirParaPagamento14();
	})

    it('Realizar pagamento', () => {
        cy.realizarPagamento14();
	})

    it('Deletar conta', () => {
        cy.deletarConta14();
    });

   
})