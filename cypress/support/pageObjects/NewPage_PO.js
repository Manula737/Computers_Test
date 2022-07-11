class NewPage_PO{    

  primaryButton(){
    const primaryButton = cy.get('.btn.primary');
    return primaryButton;
  }

  deleteButton(){
    const deleteButton = cy.get('.btn.danger');
    return deleteButton;
  }
    
  verifyAddAComputerForDisplayed(){
    cy.get('.clearfix ').eq(0).should('contain', 'Computer name')
  }

  enterComputerName(fieldName, computerName){
    let locator = '#'.concat(fieldName);    
    let computerName1 = computerName.concat(Math.random().toString());    
    cy.get(locator).type(computerName1);
    cy.wrap(computerName1).as("computerName1");
  }

  selectCompanyName(companyName){
    cy.get('select').select(companyName);
  }

  clickOnCreateComputerBtn(){
    this.primaryButton().click();
  }

  verifySuccessMessageIsDisplayed(message){
    cy.get("@computerName1").then((computerName1)=>{
      console.log(computerName1);
      let expectedMessage = computerName1.concat(message);
      cy.get('.alert-message.warning').should('contain', expectedMessage);      
    }) 
  }

  searchNewComputer(){
    cy.get("@computerName1").then((computerName1)=>{
      console.log(computerName1);
      cy.get('#searchbox').type(computerName1);
      cy.get('#searchsubmit').click();
    })
  }

  clickOnNewComputer(){
    cy.get("@computerName1").then((computerName1)=>{
      console.log(computerName1);
    cy.contains(computerName1).click();
    })
  }

  updateComputerDetails(fieldName, data){
    let locator = '#'.concat(fieldName);
    cy.get(locator).type(data);
  }

  clickOnSaveComputerBtn(){
    this.primaryButton().click();
  }  

  verifyDataIsDisplayed(date){
    cy.get('td').should('contain', date)
  } 

  deleteBtnIsDisplayed(text){
    this.deleteButton().should('contain', text)    
  }

  clickOnDeleteBtn(){
    this.deleteButton().click();
  }

  verifyDeletedComputerIsNotDisplayed(message){
    cy.get('.well').should('contain', message);
  }
}
export default NewPage_PO;