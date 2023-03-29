
const textosSpanVenta = ["ENVÍO GRATIS A PARTIR DE $15.000", "3 CUOTAS SIN INTERÉS", "OFERTAS EN COMPRAS AL MAYOR"];

function cambiarPublicadad() {
    let indice = 0;
    const spanVenta = document.getElementById("publicidadTitulo");
    setInterval(() => {
        spanVenta.textContent = textosSpanVenta[indice];
        indice = (indice + 1) % textosSpanVenta.length;
    }, 4000);
}
document.addEventListener("DOMContentLoaded", () => {
    cambiarPublicadad();
});



const imagenProductos = document.querySelectorAll(".imgProductos");
let indice = 1;
let anterior = 0;

function cambiarImagen() {
    setInterval(() => {
        imagenProductos[anterior].style.display = `none`;
        imagenProductos[indice].style.display = `block`;
        anterior = indice;
        indice = (indice + 1) % imagenProductos.length;
    }, 8000);
}

const tema = document.getElementById("cambioTema");
const cuerpo = document.querySelector("body");
function cambiarTema() {

    if (tema.style.color == "black") {
        localStorage.setItem('modo-oscuro', 'desactivado');
        tema.style.color = "white";
        cuerpo.style.background = "black";
        cuerpo.style.color = "white";
    }
    else {
        localStorage.setItem('modo-oscuro', 'activado');
        tema.style.color = "black";
        cuerpo.style.background = "white";
        cuerpo.style.color = "black";

    }
}


const modoOscuro = localStorage.getItem('modo-oscuro');

function controlTema() {
    if (modoOscuro === "desactivado") {
        tema.style.color = "white";
        cuerpo.style.background = "black";
        cuerpo.style.color = "white";
    }
    else {
        tema.style.color = "black";
        cuerpo.style.background = "white";
        cuerpo.style.color = "black";

    }
}
document.addEventListener("DOMContentLoaded", () => {
    controlTema();
});



document.addEventListener("DOMContentLoaded", () => {
    cambiarImagen();
});

const btnSiguiente = document.querySelector("#btnSiguiente");
const btnAnterior = document.querySelector("#btnAnterior");

function botonSiguiente() {
    imagenProductos[anterior].style.display = `none`;
    imagenProductos[indice].style.display = `block`;
    anterior = indice;
    indice = (indice + 1) % imagenProductos.length;
}
function botonAnterior() {
    imagenProductos[indice].style.display = `none`;
    indice = anterior;
    imagenProductos[indice].style.display = `block`;
    if ((indice - 1) < 0) {
        anterior = imagenProductos.length - 1;
    }
    else {
        anterior = (indice - 1) % imagenProductos.length;
    }
}


var clickMenu = document.getElementById("desplegar");
clickMenu.addEventListener("click", () => {
    if (document.getElementById("desplegable").style.visibility == "visible") {
        document.getElementById("desplegable").style.opacity = "0";
        document.getElementById("desplegable").style.visibility = "hidden";
    }
    else {

        document.getElementById("desplegable").style.opacity = "1";
        document.getElementById("desplegable").style.visibility = "visible";
    }
})