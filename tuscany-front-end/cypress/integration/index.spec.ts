/// <reference types="Cypress" />

describe("Home Page", () => {
  it("Has the correct title", () => {
    cy.server();
    cy.route("POST", "/graphql", "fixture:categories.json");
    cy.visit("/");
    cy.get("h1").contains("chiangdao.guide");
    cy.get("h2").contains("Categories");
  });
});

export {};
