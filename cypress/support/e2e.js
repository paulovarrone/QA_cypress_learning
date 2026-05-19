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
import './criarConta'
import './deletarConta'
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
import './TestCase11VerifySubscriptionInCartPage.js'
import './TestCase12AddProductsInCart.js'
import './TestCase13VerifyProductQuantityInCart.js'
import './TestCase14PlaceOrderRegisterWhileCheckout.js'
import './TestCase15PlaceOrderRegisterBeforeCheckout.js'
import './TestCase16PlaceOrderLoginBeforeCheckout.js'
import './TestCase17RemoveProductsFromCart.js'
import './TestCase18ViewCategoryProducts.js'
import './TestCase19View&CartBrandProducts.js'
import './TestCase20SearchProductsAndVerifyCartAfterLogin.js'
import './TestCase21AddReviewOnProduct.js'
import './TestCase22AddToCartFromRecommendedItems.js'
import './TestCase23VerifyAddressDetailsInCheckoutPage.js'
import './TestCase24DownloadInvoiceAfterPurchaseOrder.js'
import './TestCase25VerifyScrollUpUsingArrowbuttonAndScrollDownFunctionality.js'
import './TestCase26VerifyScrollUpWithoutArrowButtonAndScrollDownFunctionality.js'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// beforeEach(() => {
//   cy.clearCookies()       
//   cy.clearLocalStorage()  
//   // cy.clearAllCookies()    
//   // cy.clearAllLocalStorage() 
//   // cy.clearAllSessionStorage() 
// })