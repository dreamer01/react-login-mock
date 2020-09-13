const user = require("../fixtures/user.json");
const profile = require("../fixtures/profile.json");

describe("visit homepage", () => {
  it("visit login page and sign in to navigate to home page", () => {
    cy.login(user);
    cy.visit("/");
    cy.findByRole("heading", { name: /testing/i });
    cy.findByTestId(/nav-about/i).click();
    cy.findByRole("heading", { name: /about/i });
    cy.findByTestId(/nav-profile/i).click();
    cy.findByRole("heading", { name: profile.name });
    cy.findByRole("img").click();
    cy.findByRole("heading", { name: /testing/i });
    cy.findByTestId(/nav-logout/i).click();
    cy.findByRole("heading", { name: /sign in/i });
  });
});
