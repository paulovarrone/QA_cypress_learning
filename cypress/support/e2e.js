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
import './TestCase1RegisterUser.js'
import './TestCase2LoginUserWithCorrectEmailandPassword.js'
import './TestCase3LoginUserWithIncorrectEmailAndPassword.js'
import './TestCase4LogoutUser.js'
import './TestCase5RegisterUserWithExistingEmail.js'
import './TestCase6ContactUsForm.js'
import './TestCase7VerifyTestCasesPage.js'
import './TestCase8VerifyAllProductsAndProductDetailPage.js'
import './TestCase9SearchProduct.js'
import './TestCase10VerifySubscriptionInHomePage.js'
import './decimoPrimeiro.js'
import './decimoSegundo.js'
import './decimoTerceiro.js'
import './decimoQuarto.js'
// import './decimoQuinto.js'
// import './decimoSexto.js'
// import './decimoSetimo.js'
// import './decimoOitavo.js'
// import './decimoNono.js'
// import './vigésimoTeste.js'
// import './vigesimoPrimeiro.js'
// import './vigesimoSegundo.js'
// import './vigesimoTerceiro.js'
// import './vigesimoQuarto.js'
// import './vigesimoQuinto.js'
// import './vigesimoSexto.js'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

beforeEach(() => {
  cy.clearCookies()       
  cy.clearLocalStorage()  
  // cy.clearAllCookies()    
  // cy.clearAllLocalStorage() 
  // cy.clearAllSessionStorage() 
})