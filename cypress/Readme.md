# Computers-Test -Automation
---

## Project Overview
This project has been completed with Cucumber BDD style tests, using Cypress on Visual Studio Code IDE.

## Running Tests

Note: This project has been designed to run straight out of the box with no configuration needed.

Step 1: Open the 'Computers' Automation project on an IDE (This README file has been described using the VS Code IDE)

- Open a new Terminal on your IDE and type in the command:

     - npm install

This should restore any missing dependencies (For Reference, see Package.json file.

Step 2: With all dependencies restored, Simply type in the following command in your Terminal

- npm run test - this will open Cypress dashboard.

This will spin up the Cypress Test Runner where you'll find 3 BDD Tests

- addComputer.feature
- crudOperation.feature
- search.feature

Click on a feature to run any test and results will be displayed on the dashboard.

---

## Choosing A Browser (Default Set To Chrome)

The Cypress Test Runner has been Designed with multiple Browser support (Chrome, Firefox and Electron) which can also be located on the top right corner of the Cypress Test Runner window. Click on the dropdown and select a browser.

## Explorer
This project is designed using the Page Object Module.

- Find 'Integration' Folder for Cucumber Feature Files and Step Definitions
- Find 'Support' Folder for Page Objects and Functions
