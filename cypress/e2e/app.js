describe("visit website", () => {
  it("visit login page and sign in", () => {
    cy.visit("/")
      .get("[data-testid=email]")
      .type("test@gmail.com")
      .get("[data-testid=password]")
      .type("sadjTDw")
      .get(".btn")
      .click();
  });
});
