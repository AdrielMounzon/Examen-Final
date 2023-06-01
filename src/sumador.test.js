import numeroMonedas from "./numeroMonedas";

describe("Numero Monedas", () => {
  it("deberia devolver una lista vacía para el monto 0", () => {
    expect(numeroMonedas(0)).toEqual([]);
  });

  it("deberia devolver una moneda de 1Bs para el monto 1", () => {
    expect(numeroMonedas(1)).toEqual([1]);
  });
});
