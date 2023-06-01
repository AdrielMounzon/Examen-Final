describe("Calculadora de cambios", () => {
  it("Muestra el cambio correspondiente a un monto de venta y el efectivo", () => {
    cy.visit("/");
    cy.get("#montoVenta").type(4);
    cy.get("#efectivo").type(5);
    cy.get("#calcularCambio").click();
    cy.get("#cambio-div").should("contain", "1");
  });
});
