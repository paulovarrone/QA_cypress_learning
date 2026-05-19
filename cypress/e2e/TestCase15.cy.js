describe('template spec', () => {

	it('Entrar no site', () => {
		cy.visitarURL15();
	})

    it('Verificar se esta na home', () => {
        cy.verificarHome15();
    })

	it('Acessar pagina de login', () => {
        cy.acessarPaginaLogin15();
	})

    it('Fazer signup de novo usuario', () => {
        cy.realizarPreLogin15();  
	})

    it('Criar conta de novo usuario', () => {
        cy.criarConta15();     
	})

    it('Verificar login', () => {
        cy.verificarLogin15();
    })

    it('Adicionar produtos ao carrinho', () => {
        cy.colocarComprasNoCarrinho15();   
	})

    it('Verificar informações de entrega e ir para pagamento', () => {  
        cy.verificarInfosEseguirParaPagamento15();
	})

    it('Realizar pagamento', () => {
        cy.realizarPagamento15();
	})

    it('Deletar conta', () => {
        cy.deletarConta15();
    });

   
})


