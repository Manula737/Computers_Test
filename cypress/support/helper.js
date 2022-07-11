class Helper{
navigateToHomepage(){  
  cy.visit('/');
  cy.url().should('contain','computers');
 }
}
export default Helper;