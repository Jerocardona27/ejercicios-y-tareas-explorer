/*Tarea 1
Capturar tres números por medio de cajas de texto, 
compararlos e indicar cual número es mayor y cual menor, 
adicionar una validación en caso de que sean iguales.
Hacer uso del evento DOMContentLoaded y clic.*/



const botoncete = document.getElementById("comparison").addEventListener("click", function () {

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);
    const result = document.getElementById('result');
    let numMayor
    let numMenor

    if (num3 && num2 < num1) {
        numMayor = num1;
    } else if (num2 && num1 < num3) {
        numMayor = num3;
    } else {
        numMayor = num2;
    } if (num1 < num2 && num3) {
        numMenor = num1;
    } else if (num3 < num2 && num1) {
        numMenor = num3;
    } else {
        numMenor = num2
    }




    result.innerHTML = `Este es el número mayor ${numMayor} y este es el número menor ${numMenor}`;
    

})



