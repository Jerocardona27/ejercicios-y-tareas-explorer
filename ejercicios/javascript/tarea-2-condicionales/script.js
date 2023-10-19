//tarea 2 secuencias condicionales
let pagaHora = 16;
let pagaHEX = 20;
let salarioS;
let horasT;
let horasEx

horasT = Number(prompt("¿Cuántas horas trabajaste?"));

if (horasT <= 40) {
    salarioS = pagaHora * horasT
} else (horasT > 40); {
    horasEx = horasT - 40
    salarioS = (pagaHora * 40) + horasEx * pagaHEX
}
alert("Tu salario semanal es " + salarioS)