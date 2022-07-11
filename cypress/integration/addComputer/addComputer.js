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

Then('I navigate to homepage', ()=>{
  homepage.verifyUrl();
})

And('I enter {string} date as {string}', (fieldName, data)=>{
  newpage.updateComputerDetails(fieldName, data);
})

Then('Success message displayed as computer {string}', (message)=>{
  newpage.verifySuccessMessageIsDisplayed(message);
})

Then('Success message not displayed', ()=>{
  homepage.verifySuccessMessageNotDisplayed();
})

When('I get number of computers', ()=>{
  homepage.getNumberOfComputers();
})

Then('Number of computers has increased by one', ()=>{
  homepage.verifyNumberOfComputersIncreasedByOne();
})