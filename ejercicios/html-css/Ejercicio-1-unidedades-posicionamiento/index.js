/*document.querySelector("button").addEventListener("click", boton);

function boton() {
    let ocultar = document.getElementsByClassName("oculto");
    let ocultare = document.getElementById("quepasa");
    let ocultari = document.getElementById("quepasa");

    ocultari
    ocultare.style.display="none";
}*/


const buton = document.getElementById("boton");
const hide = document.getElementById("oculto");

buton.addEventListener("click", function () {
    if (hide.style.display == "block") {
        hide.style.display = "none";
    } else {
        hide.style.display = "block";
    }
})




