describe("Home Page", () => {
  it("Has the correct title", () => {
    cy.visit("/");
    cy.get("h1").contains("chiangdao.guide");
    cy.get("h2").contains("Categories");
  });
});
