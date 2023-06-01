import calcularCambio from "./sumador";

const montoVenta = document.querySelector("#montoVenta");
const efectivoPagado = document.querySelector("#efectivo");
const form = document.querySelector("#calcularCambio-form");
const div = document.querySelector("#cambio-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const monto = Number.parseInt(montoVenta.value);
  const efectivo = Number.parseInt(efectivoPagado.value);

  div.innerHTML = "<p>" + calcularCambio(monto, efectivo) + "</p>";
});
