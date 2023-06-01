import calcularCambio from "./calculadora";

const montoVenta = document.querySelector("#montoVenta");
const efectivoPagado = document.querySelector("#efectivo");
const form = document.querySelector("#calcularCambio-form");
const div = document.querySelector("#cambio-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(montoVenta.value=="" || efectivoPagado.value=="")
  {
    div.innerHTML = "<p>" + "Error: Se deben introucir valores a ambos campos" + "</p>";
  }
  else
  {
    const monto = Number.parseInt(montoVenta.value);
    const efectivo = Number.parseInt(efectivoPagado.value);

    div.innerHTML = "<p>" + calcularCambio(monto, efectivo) + "</p>";
  }
});
