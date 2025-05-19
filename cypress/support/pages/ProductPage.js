class ProductPage {
  clickProductsMenu() {
    cy.get('a[href="/products"]').click();
  }

  verifyProductPageVisible() {
    cy.url().should('include', '/products');
    cy.get('.title.text-center').should('contain', 'All Products');
  }

  hoverAndAddToCart(productIndex) {
    // Product index: 1-based index (1 = first product)
    cy.get('.product-image-wrapper')
      .eq(productIndex - 1)
      .trigger('mouseover')
      .within(() => {
        cy.contains('Add to cart').click({ force: true });
      });
  }

  clickContinueShopping() {
    cy.contains('Continue Shopping').click();
  }

  clickViewCart() {
    cy.contains('View Cart').click();
  }

  verifyProductInCart(productIndex) {
    // Validate product appears in the cart table
    cy.get('#cart_info_table tbody tr').eq(productIndex - 1).should('be.visible');
  }
}

export default ProductPage;
