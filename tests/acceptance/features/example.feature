Feature: BDD Example with Playwright

    Scenario: Example scenario
        Given the user has navigated to the google search
        When the user searches for "JankariTech"
        Then the search list should contain "jankaritech.com" website