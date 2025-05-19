import LoginPage from '../support/pages/LoginPage';
import ContactPage from '../support/pages/ContactPage';
import ProductPage from '../support/pages/ProductPage';

describe('Test Case 1: Login User with correct credentials', () => {
  
  const loginPage = new LoginPage();
  const contactPage = new ContactPage();
  const productPage = new ProductPage();
  const username = 'Test user'; // Ensure this matches the created user

  beforeEach(() => {
    loginPage.visit();
  });
  
  

  it('Test Case 1: Should log in successfully and log out', () => {

    // Verify homepage
    cy.get('div.logo').should('be.visible');

    // Login steps
    loginPage.clickSignupLogin();
    loginPage.verifyLoginHeader();
    loginPage.enterEmail(Cypress.env('email'));
    loginPage.enterPassword(Cypress.env('password'));
    loginPage.clickLoginButton();
    loginPage.verifyLoggedIn(username);

    // Logout steps
    loginPage.clickLogout();
    loginPage.verifyLoginPage();

    
  });

//////////////////////////
  it('Test Case 2: Should successfully submit the contact form', () => {
   

    contactPage.clickContactUs();
    contactPage.verifyGetInTouch();

    contactPage.fillContactForm({
      name: 'Test User',
      email: Cypress.env('email'),
      subject: 'Automation Inquiry',
      message: 'This is a test message from Cypress'
    });

    contactPage.uploadFile('cypress/fixtures/sample.txt');
    contactPage.clickSubmit();
    contactPage.confirmAlert();
    contactPage.verifySuccessMessage();
    contactPage.clickHomeButton();
    contactPage.verifyHomePage();
  });

///////////////////////////
  it('Test Case 3: Should add two products to cart and verify', () => {

    // Go to Products
    productPage.clickProductsMenu();
    productPage.verifyProductPageVisible();

    // Add first product
    productPage.hoverAndAddToCart(1);
    productPage.clickContinueShopping();

    // Add second product
    productPage.hoverAndAddToCart(2);
    productPage.clickViewCart();

    // Verify both products are in cart
    productPage.verifyProductInCart(1);
    productPage.verifyProductInCart(2);
  });
});






