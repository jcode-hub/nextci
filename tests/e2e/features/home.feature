Feature: Homepage
  Scenario: I click on the documentation
    Given I navigate to the homepage
    When The page is loaded
    And I click on the documentation button
    Then I see the main page

  Scenario: See the home page
    Given I navigate to the homepage
    When The page is loaded
    Then I see the main page