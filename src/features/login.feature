Feature: Login to Saucedemo website

  Background: Navigate to Login page
    Given I open "login" page

  Scenario: Login with empty cretentials
    When I enter "pepito" and "perez" in the login form
    And I clear all form inputs
    And I click on Login button
    Then I should see an error message "contain" "Username is required"

  Scenario: Login with username and empty password
    When I enter "pepito" and "perez" in the login form
    And I clear password form input
    And I click on Login button
    Then I should see an error message "contain" "Password is required"

  Scenario: Login with valid credentials
    When I enter "standard_user" and "secret_sauce" in the login form
    And I click on Login button
    Then I should see page title in inventory page "be equal to" "Swag Labs"
