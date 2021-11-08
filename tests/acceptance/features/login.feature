Feature: User login

    Scenario: valid login
        Given user has navigated to the home page
        When user logs in with email "demo@example.com" and password "demo"
        Then user should see dashboard