Feature: Add Computer

    Scenario: Successfully add a new computer
        Given I am in the homepage
        Then Number of 'computers found' is displayed
        When I click on Add a new computer button
        Then I can see Add a computer form
        When I enter computer 'name' as 'Test'
        And I select company as 'Apple Inc.'
        And I click on Create this computer button
        Then I navigate to homepage
        And Success message displayed as computer ' has been created'

    Scenario: Unable to add a computer without name
        Given I am in the homepage
        Then Number of 'computers found' is displayed
        When I click on Add a new computer button
        Then I can see Add a computer form
        And I enter 'introduced' date as '2000-01-01'
        And I enter 'discontinued' date as '2015-12-31'
        And I select company as 'Apple Inc.'
        And I click on Create this computer button
        Then Success message not displayed

    Scenario: Number of computers should be increased when new computer is added
        Given I am in the homepage
        Then Number of 'computers found' is displayed
        When I get number of computers
        When I click on Add a new computer button
        Then I can see Add a computer form
        When I enter computer 'name' as 'Test'
        And I select company as 'Apple Inc.'
        And I click on Create this computer button
        Then I navigate to homepage
        And Success message displayed as computer ' has been created'
        Then Number of computers has increased by one

