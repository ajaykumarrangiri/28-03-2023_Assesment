Feature: Login feature (Proper credentials) for Insurance application of GURU99

    Login feature (Proper credentials) for Insurance application of GURU99
    
    Scenario: Login with correct email and password combination
        Given I have open the Insurance application
        When I enter 'kumaranrarr@gmail.com' as eamil and 'kumaranrarr' as passwrd
        And I click on login btton
        Then I am able to login to application