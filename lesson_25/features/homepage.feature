Feature: WebdriverIO website testing

  Scenario: Home page logo display
    Given I open the home page
    Then the "logo" should be displayed

  Scenario: Search box display on home page
    Given I open the home page
    Then the "search box" should be displayed

 Scenario: Navigate to the documentation page
    When I navigate to the "documentation" page
    Then the "documentation" page should be opened with the title "Getting Started"

  Scenario: Navigate to the API page
    When I navigate to the "API" page
    Then the "API" page should be opened with the title "Introduction"