class LoginPage {
     visit() {
      cy.visit('baseUrl');
    }


  clickSignupLogin() {
    cy.contains('Signup / Login').click();
  }

  verifyLoginHeader() {
    cy.contains('Login to your account').should('be.visible');
  }

  enterEmail(email) {
    cy.get('input[data-qa="login-email"]').type(email, { log: false });
  }

  enterPassword(password) {
    cy.get('input[data-qa="login-password"]').type(password, { log: false });
  }

  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click();
  }

  verifyLoggedIn(username) {
    cy.contains(`Logged in as ${username}`).should('be.visible');
  }

  clickLogout() {
    cy.contains('Logout').click();
  }

  verifyLoginPage() {
    cy.url().should('include', '/login');
  }
}


export default LoginPage;
