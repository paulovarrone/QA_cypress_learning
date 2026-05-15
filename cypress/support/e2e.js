// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './primeiroTeste.js'
import './segundoTeste.js'
import './terceiroTeste.js'
import './quartoTeste.js'
import './quintoTeste.js'
import './sextoTeste.js'
import './setimoTeste.js'
import './oitavoTeste.js'
import './nonoTeste.js'
import './decimoTeste.js'
import './decimoPrimeiro.js'
import './decimoSegundo.js'
import './decimoTerceiro.js'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

beforeEach(() => {
  cy.clearCookies()       
  cy.clearLocalStorage()  
  cy.clearAllCookies()    
  cy.clearAllLocalStorage() 
  cy.clearAllSessionStorage() 
})