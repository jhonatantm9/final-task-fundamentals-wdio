Feature: Login to Saucedemo website

  Background: Navigate to Login page
    Given I open "login" page

  Scenario: Login with empty cretentials
    When I enter "pepito" and "perez" in the login form
    And I clear all form inputs
    And I click on Login button
    Then I should see the error message "Username is required"
