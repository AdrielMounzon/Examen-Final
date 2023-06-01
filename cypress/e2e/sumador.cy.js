describe("Calculadora de cambios", () => {
  it("Muestra el cambio correspondiente a un monto de venta y el efectivo", () => {
    cy.visit("/");
    cy.get("#montoVenta").type(4);
    cy.get("#efectivo").type(5);
    cy.get("#calcularCambio").click();
    cy.get("#cambio-div").should("contain", "1");
  });

  it("Muestra un error si no se ingresa alguno de los valores", () => {
    cy.visit("/");
    cy.get("#calcularCambio").click();
    cy.get("#cambio-div").should("contain", "Error: Se deben introucir valores a ambos campos");
  });
});
