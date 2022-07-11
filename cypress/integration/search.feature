Feature: Search

    Scenario: I should be able to see the results when search by computer name
        Given I am in the homepage
        When I enter 'Dell' in the search box
        Then I can see "Dell" in the list

    Scenario Outline: I shouldn't be able to see any item with invalid search criteria
        Given I am in the homepage
        When I enter '<invalidName>' in the search box
        Then Displayed 'Nothing to display' on the screen

        Examples:
            | invalidName |
            | ?!""        |
            | +++         |
            | £$%         |
