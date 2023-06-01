import numeroMonedas from "./numeroMonedas";

describe("Numero Monedas", () => {
  it("deberia devolver una lista vacía para el monto 0", () => {
    expect(numeroMonedas(0)).toEqual([]);
  });
});
