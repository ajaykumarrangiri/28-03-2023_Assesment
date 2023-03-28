import {Given, And, Then, When, Before, After} from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../../page-object/page-actions/LoginPageAction";

const login = new LoginPageAction();

Given("I have open the Insurance application", () => {
    login.navigateToURL();
});

When("I enter {string} as eamil and {string} as passwrd", (email, pwd) => {
    login.enterLoginDetails(email, pwd);
});

And("I click on login btton", () => {
    login.clickLogin();
    cy.wait(1000*3);
});

Then("I am able to login to application", () => {
    cy.get('div > h2')
    .should("be.visible")
    .contains("Broker Insurance WebPage");
});