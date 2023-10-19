function CalcularMts() {

    
    const metros = parseInt(document.getElementById("metros").value);
    const resultado = document.getElementById("result");
    
    const Rfinal = metros * 39.37


    resultado.textContent = `Las pulgadas que debe pedir son: ${Rfinal.toFixed(2)}`;
}