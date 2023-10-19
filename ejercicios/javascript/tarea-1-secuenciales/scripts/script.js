function CalcularPorcentaje() {

    const totale = parseInt(document.getElementById("totalE").value);
    const totalh = parseInt(document.getElementById("totalH").value);
    const totalm = parseInt(document.getElementById("totalM").value);
    const resultado = document.getElementById("Resultado");

    const percentH = (totalh / totale) * 100;
    const percentM = (totalm / totale) * 100;

    resultado.textContent = `El porcentaje de hombres en su grupo es: ${percentH.toFixed(1)}.
    El porcentaje de mujeres en su grupo es: ${percentM.toFixed(1)}`;







}