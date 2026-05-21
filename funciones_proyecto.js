const body = document.querySelector('.secciones');
const disco = document.querySelector('#disco');

disco.addEventListener('click', () => {
    body.classList.toggle('menu-abierto');
    body.classList.toggle('menu-cerrado');
});

const img= document.querySelectorAll(".img");

/*Panel inferior*/
const vistas= [
    ["Imagenes/proyecto1.png", "Imagenes/proyecto2.png", "Imagenes/proyecto3.png"]
];

const panel = document.getElementById("panel");
const v1 = document.getElementById("vista1");
const v2 = document.getElementById("vista2");
const v3 = document.getElementById("vista3");

const imagenPrincipal = document.querySelector(".img");

imagenPrincipal.addEventListener("click", () => {
    v1.src = vistas[0][0];
    v2.src = vistas[0][1];
    v3.src = vistas[0][2];

    panel.classList.toggle("activo");
});
