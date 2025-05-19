class ContactPage {
  // Actions
  clickContactUs() {
    cy.get('a[href="/contact_us"]').click();
  }

  verifyGetInTouch() {
    cy.get('h2.title.text-center').should('be.visible', 'GET IN TOUCH');
  }

  fillName(name) {
    cy.get('[data-qa="name"]').type(name);
  }

  fillEmail(email) {
    cy.get('[data-qa="email"]').type(email);
  }

  fillSubject(subject) {
    cy.get('[data-qa="subject"]').type(subject);
  }

  fillMessage(message) {
    cy.get('[data-qa="message"]').type(message);
  }

  uploadFile(path) {
    cy.get('input[type="file"]').selectFile(path);
  }

  clickSubmit() {
    cy.get('[data-qa="submit-button"]').click();
  }

  confirmAlert() {
    cy.on('window:alert', (str) => {
      expect(str).to.contain('Press OK');
    });
  }

  verifySuccessMessage() {
    cy.get('.status.alert.alert-success')
      .should('contain', 'Success! Your details have been submitted successfully.');
  }

  clickHomeButton() {
    cy.get('a.btn.btn-success').contains('Home').click();
  }

  verifyHomePage() {
    cy.url().should('eq', 'https://automationexercise.com/');
  }

  // Combined action for filling the form
  fillContactForm({ name, email, subject, message }) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillSubject(subject);
    this.fillMessage(message);
  }
}

export default ContactPage;
