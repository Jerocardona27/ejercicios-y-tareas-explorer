/*Tarea 1
Usted ha sido contratado por una importante empresa de pelicula sy requiere que usted diselñe una sección donde se mostrarán las 10 películas más recientes.Para poder cumplir con la entrega es necesario que se cumplan los siguientes requerimeintos:
El administrador debe poder agregar las 10 imagenes a traves del propmt.
Se debe pedir el nombre de la película y el poster(imagen) de la misma.
Todas las imagenes deben tener el mismo tamaño y se debe mostrar de la siguiente forma imagen1
El nombre de la pelicula se mostrará debajo del poster.
Se debe usar el ciclo FOR.
El contenido se insertará al DOM haciendo uso del método appendChild();*/


//==================Declaración de variables===========================//






//=================función===================//

function subir() {

    const nombre = document.querySelector("#name").value;
    const imagenpc = document.querySelector('#img');
    const galeria = document.getElementById("gallery");









    const url = URL.createObjectURL(imagenpc.files[0]);

    const objeto = document.createElement("div");
    objeto.className = "objeto";

    const imagen = document.createElement("img");
    imagen.src = url

    const texto = document.createElement("p");
    texto.innerHTML = nombre;


    objeto.appendChild(imagen);
    objeto.appendChild(texto);
    galeria.appendChild(objeto);

    imagenpc.value = "";
    nombre = document.querySelector("#name").value = "";
    













}