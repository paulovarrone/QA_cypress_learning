describe('template spec', () => {

	it('Visitar url e ver se esta na home', () => {
		cy.visitarURL15();
	})

	it('Acessar pagina de login', () => {
        cy.acessarPaginaLogin();
	})

    it('Fazer signup de novo usuario', () => {
        cy.realizarPreLogin();  
	})

    it('Criar conta de novo usuario', () => {
        cy.criarConta15();     
	})

    it('Adicionar produtos ao carrinho', () => {
        cy.colocarComprasNoCarrinho();   
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


