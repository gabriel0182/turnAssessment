Feature: Add a valid candidate

    @focus
    Scenario: Access to OrangeHRM and add a valid candidate
        Given Access OrangeHRM with the credentials
        When Go to the candidates page
        And Search for the added candidate
        Then Download the candidate resume and attach the file to the Allure Report