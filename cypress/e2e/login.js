const user = require("../fixtures/user.json");

describe("visit website", () => {
  it("visit login page and sign in to navigate to home page", () => {
    cy.server()
      .route({
        method: "POST",
        url: "http://www.mocky.io/v2/5d9d9219310000153650e30b",
      })
      .as("loginRequest");
    cy.visit("/");
    cy.findByTestId(/email/).type(user.email);
    cy.findByTestId(/password/).type(user.password);
    cy.findByRole("button").click();
    cy.findByText(/logging/i);
    cy.wait("@loginRequest");
    cy.findByRole("heading", { name: /testing/i });
  });

  it("visit login page and sign in and show error when request fails", () => {
    cy.server()
      .route({
        method: "POST",
        url: "http://www.mocky.io/v2/5d9d9219310000153650e30b",
        status: 500,
        response: {},
      })
      .as("loginRequest");
    cy.visit("/");
    cy.findByTestId(/email/).type(user.email);
    cy.findByTestId(/password/).type(user.password);
    cy.findByRole("button").click();
    // REVIEW:
    // cy.findByText(/logging/i);
    cy.wait("@loginRequest");
    cy.findByText(/login failed/i);
  });
});
