import numeroMonedas from "./numeroMonedas";

describe("Numero Monedas", () => {
  it("deberia devolver una lista vacía para el monto 0", () => {
    expect(numeroMonedas(0)).toEqual([]);
  });

  it("deberia devolver una moneda de 1Bs para el monto 1", () => {
    expect(numeroMonedas(1)).toEqual([1]);
  });

  it("deberia devolver una moneda de 5Bs para el monto 5", () => {
    expect(numeroMonedas(5)).toEqual([5]);
  });

  it("deberia devolver una moneda de 5 y una de 1 para el monto 6", () => {
    expect(numeroMonedas(6)).toEqual([5, 1]);
  });
});
