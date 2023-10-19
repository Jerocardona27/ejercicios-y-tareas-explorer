//ejercicio 1. Tarea 1
let camisas;
let totalPagar;
let precioCamisas;
let totalCamisas = 0;

precioCamisas = Number(20000)

camisas = Number(prompt("Ingrese cuántas camisas compró"));

totalCamisas = Number(precioCamisas * camisas)

console.log(totalCamisas)


if (camisas >= 3) {
    totalPagar = totalCamisas - (totalCamisas * 0.2)
} else {
    totalPagar = totalCamisas - (totalCamisas * 0.1)
}

alert(`Lo que tienes que pagar es: ${totalPagar}`)
