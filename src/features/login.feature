Feature: Login to Saucedemo website

  Background: Navigate to Login page
    Given I open "login" page

  Scenario Outline: Login with empty cretentials
    When I enter <username> and <password> in the login form
    And I clear all form inputs
    And I click on Login button
    Then I should see an error message "contain" "Username is required"
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | suez12+       | 123*abc      |
      | !/}           | jkl-.,       |

  Scenario Outline: Login with username and empty password
    When I enter <username> and <password> in the login form
    And I clear password form input
    And I click on Login button
    Then I should see an error message "contain" "Password is required"
    Examples:
      | username      | password     |
      | username      | password     |
      | standard_user | secret_sauce |
      | suez12+       | 123*abc      |
      | !/}           | jkl-.,       |

  Scenario Outline: Login with valid credentials
    When I enter <username> and <password> in the login form
    And I click on Login button
    Then I should see page title in inventory page "be equal to" "Swag Labs"
    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | error_user              | secret_sauce |
      | performance_glitch_user | secret_sauce |
