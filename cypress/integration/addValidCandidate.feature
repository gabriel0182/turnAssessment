Feature: Add a valid candidate

  @focus
  Scenario: Access to OrangeHRM and add a valid candidate
    Given Access OrangeHRM with the credentials
    When Go to the candidates page
    And Add a new candidate
    Then A 'Successfully Saved' message is displayed after adding a new candidate