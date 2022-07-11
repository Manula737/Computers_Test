import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import Helper from "../../support/helper";
import HomePage_PO from "../../support/pageObjects/Homepage_PO";
import NewPage_PO from "../../support/pageObjects/NewPage_PO";

const homepage = new HomePage_PO();
const helper = new Helper();

Given('I am in the homepage', ()=>{
  helper.navigateToHomepage();
})

Then('Number of {string} is displayed', (header)=>{
  homepage.verifyHomepageHeaders(header);
})

When('I enter {string} in the search box', (computerName)=>{
  homepage.searchComputerName(computerName)
})

Then('I can see {string} in the list', (computerName)=>{
  homepage.verifyComputerNameIsDisplayed(computerName);
})

Then('Displayed {string} on the screen', (message)=>{
  homepage.verifyNoComputerIsDisplayed(message);
})
