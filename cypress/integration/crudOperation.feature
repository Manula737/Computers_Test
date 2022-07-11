Feature: End to end CRUD operation

  Scenario: I should be able to Create/Read/Update/Delete a Computer
    Given I am in the homepage
    Then Number of 'computers found' is displayed
    When I click on Add a new computer button
    Then I can see Add a computer form
    When I enter computer 'name' as 'Test'
    And I select company as 'Apple Inc.'
    And I click on Create this computer button
    Then Success message displayed as computer ' has been created'
    When I search for the created computer
    When I Click on created computer
    And I enter 'introduced' date as '2000-01-01'
    And I enter 'discontinued' date as '2015-12-31'
    And Click on save this computer button
    Then Success message displayed as computer ' has been updated'
    When I search for the created computer
    Then Introduced date is displayed as '01 Jan 2000'
    And Discontinued date is displayed as '31 Dec 2015'
    And Company is displayed as 'Apple Inc.'
    When I Click on created computer
    Then 'Delete this computer' button is displayed
    When I click on Delete this computer button
    Then 'Computer has been deleted' message displayed
    When I search for the created computer
    Then Displayed 'Nothing to display' on the screen



