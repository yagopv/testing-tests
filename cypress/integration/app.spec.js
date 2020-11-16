describe("In my App", () => {
  it("should allow to sum numbers", () => {
    cy.visit("/");

    cy.get("#param1").type(3);
    cy.get("#param2").type(5);
    cy.get("#sum").click();
    cy.get("#result").should("contain", "8");
  });
});
