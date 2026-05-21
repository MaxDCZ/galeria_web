const body = document.querySelector('.secciones');
const disco = document.querySelector('#disco');

disco.addEventListener('click', () => {
    body.classList.toggle('menu-abierto');
    body.classList.toggle('menu-cerrado');
});

/*Carrusel de imagenes*/
const img= document.querySelectorAll(".img");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

let currentIndex = 0;

function mostrarImagen(index){
    img.forEach(imagen => imagen.classList.remove("visible"));
    currentIndex = (index + img.length) % img.length;
    img[currentIndex].classList.add("visible");

    
    if (panel.classList.contains("activo")) {
    v1.src = vistas[currentIndex][0];
    v2.src = vistas[currentIndex][1];
    v3.src = vistas[currentIndex][2];
}

}


btnAnterior.addEventListener("click",()=>{
    mostrarImagen(currentIndex - 1);
});

btnSiguiente.addEventListener("click",()=>{
    mostrarImagen(currentIndex + 1);
});

/*Panel inferior*/
const vistas= [
    ["Imagenes/mario1.png", "Imagenes/mario2.png", "Imagenes/mario3.png"],
    ["Imagenes/afrofuturista1.png", "Imagenes/afrofuturista2.png", "Imagenes/afrofuturista3.png"],
    ["Imagenes/mandala1.png", "Imagenes/mandala2.png", "Imagenes/mandala3.png"],
    ["Imagenes/papel_picado1.png", "Imagenes/papel_picado2.png", "Imagenes/papel_picado3.png"],
    ["Imagenes/giratiempo1.png", "Imagenes/giratiempo2.png", "Imagenes/giratiempo3.png"],
    ["Imagenes/reloj.png", "Imagenes/reloj.png", "Imagenes/solar1.png"]
];

const panel = document.getElementById("panel");
const v1 = document.getElementById("vista1");
const v2 = document.getElementById("vista2");
const v3 = document.getElementById("vista3");

img.forEach(imagen => {
    imagen.addEventListener("click", () => {
        
        v1.src = vistas[currentIndex][0];
        v2.src = vistas[currentIndex][1];
        v3.src = vistas[currentIndex][2];

        
        panel.classList.toggle("activo");
    });
});