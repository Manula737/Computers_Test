import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import Homepage_PO from "../../support/pageObjects/Homepage_PO";
import Helper from "../../support/helper";
import NewPage_PO from "../../support/pageObjects/NewPage_PO";

const homepage = new Homepage_PO();
const helper = new Helper();
const newpage = new NewPage_PO();

Given('I am in the homepage', ()=>{
  helper.navigateToHomepage();
})

Then('Number of {string} is displayed', (header)=>{
  homepage.verifyHomepageHeaders(header);
})

When('I click on Add a new computer button', ()=>{
 homepage.clickOnAddNewComputerBtn();
})

Then('I can see Add a computer form', (text)=>{
 newpage.verifyAddAComputerForDisplayed();
})

When('I enter computer {string} as {string}', (fieldName, computerName)=>{
  newpage.enterComputerName(fieldName, computerName);
})

And('I select company as {string}', (companyName)=>{
  newpage.selectCompanyName(companyName)
})

And('I click on Create this computer button', ()=>{
  newpage.clickOnCreateComputerBtn();
})

Then('Success message displayed as computer {string}', (message)=>{
  newpage.verifySuccessMessageIsDisplayed(message);
})

When('I search for the created computer', ()=>{
  newpage.searchNewComputer();
})

When('I Click on created computer', ()=>{
  newpage.clickOnNewComputer();
})

And('I enter {string} date as {string}', (fieldName, data)=>{
  newpage.updateComputerDetails(fieldName, data);
})

And('Click on save this computer button', () =>{
  newpage.clickOnSaveComputerBtn();
})

Then('Introduced date is displayed as {string}', (date)=>{
  newpage.verifyDataIsDisplayed(date);
})

And('Discontinued date is displayed as {string}', (date)=>{
  newpage.verifyDataIsDisplayed(date);
})

And('Company is displayed as {string}', (company)=>{
  newpage.verifyDataIsDisplayed(company);
})

Then('{string} button is displayed', (text)=>{
  newpage.deleteBtnIsDisplayed(text);
})

When('I click on Delete this computer button', ()=>{
  newpage.clickOnDeleteBtn();
})

Then('Displayed {string} on the screen', (message)=>{
  newpage.verifyDeletedComputerIsNotDisplayed(message);
})

Then('{string} message displayed', (message)=>{
  homepage.verifySuccessMessageIsDisplayedForDelete(message)
})

