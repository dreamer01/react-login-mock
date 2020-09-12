describe("visit website", () => {
  it("visit login page", () => {
    cy.visit("/")
      .get("[data-testid=email]")
      .type("test@gmail.com")
      .get("[data-testid=password]")
      .type("sadjTDw")
      .get(".btn")
      .click();
  });
});
