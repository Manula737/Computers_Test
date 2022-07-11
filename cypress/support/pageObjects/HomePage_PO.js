import { should } from "chai";

class HomePage_PO{

  verifyHomepageHeaders(header){
    cy.get('#main>h1').should('contain',header)
  }

  clickOnAddNewComputerBtn(text){    
    cy.get('#add').click();
  }

  searchComputerName(computerName){
    cy.get('#searchbox').type(computerName);
    cy.get('#searchsubmit').click();
  }

  verifyComputerNameIsDisplayed(computerName){
    cy.get('a').contains(computerName);
  }

  verifyNoComputerIsDisplayed(message){
    cy.get('.well').should('contain', message);
  }

  verifySuccessMessageIsDisplayedForDelete(expectedMessage){        
    cy.get('.alert-message.warning').should('contain', expectedMessage)}

  verifyUrl(){
    cy.url().should('contain','computers');
  }

  verifySuccessMessageNotDisplayed(){
    cy.get('.alert-message.warning').should('not.exist');
  }

  getNumberOfComputers(){  
  cy.get('#main>h1').invoke('text').then((text) =>{
  let number = text.match(/\d+/g);
  cy.wrap(number).as("number"); 
  }       
  )}

  verifyNumberOfComputersIncreasedByOne(){
    cy.get('#main>h1').invoke('text').then((text) =>{     
      cy.get("@number").then((number)=>{
        console.log(number);
        let updatedNumber = parseInt(number) + 1
        let updatedNumberStr = updatedNumber.toString();
        expect(text).to.include(updatedNumberStr)            
      })    
  })}

}
export default HomePage_PO;