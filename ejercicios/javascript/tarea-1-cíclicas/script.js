//Ejercicio #1
//Leer 10 números e imprimir solamente los números positivos.

function ejercicio1() {
    let nump = 0;


    for (let x = 1; x <= 10; x++) {
        let num = Number(prompt(`Ingrese un número`))
        console.log("su cuenta es " + x)
        if (num > 0) {
            nump++;

        }
    }


    alert(`La cantidad de números positivos es ${nump}`)
}
//--------------------------------//

//Ejercicio #2
//Calcular e imprimir la tabla de multiplicar de un número cualquiera.Imprimir el multiplicando, el multiplicador y el producto.

function ejercicio2() {
    let num;
    const solucion = document.getElementById("resultado");

    num = parseInt(prompt("Ingrese el número a mostrar su tabla:"))

   if (isNaN(num)) {
    console.log(`Eso no es un número`);
   } else {
    for (let x = 0; x <= 10; x++) {
        
        let multiplicación = num * x;
        
       console.log(`El multiplicando es: ${num}. El multiplicador es: ${x}. El producto es: ${multiplicación}`);
       alert(`El multiplicando es: ${num}. El multiplicador es: ${x}. El producto es: ${multiplicación}`);
        
    }
   
}


}


    
