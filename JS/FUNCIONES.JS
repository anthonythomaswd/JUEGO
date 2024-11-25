let imgn1 = [
    { nombre: "tinkerbell", url: "IMAGENES/TINKERBELL.jpg" },
    { nombre: "fairy", url: "IMAGENES/FAIRY.jpg" },
    { nombre: "lucero", url: "IMAGENES/LUCERO.jpg" },
    { nombre: "roseta", url: "IMAGENES/ROSETA.jpg" },
    { nombre: "silvermist", url: "IMAGENES/SILVERMIST.jpg" },
    { nombre: "vivia", url: "IMAGENES/VIVIA.webp" },
    { nombre: "tinkerbell", url: "IMAGENES/TINKERBELL.jpg" },
    { nombre: "fairy", url: "IMAGENES/FAIRY.jpg" },
    { nombre: "lucero", url: "IMAGENES/LUCERO.jpg" },
    { nombre: "roseta", url: "IMAGENES/ROSETA.jpg" },
    { nombre: "silvermist", url: "IMAGENES/SILVERMIST.jpg" },
    { nombre: "vivia", url: "IMAGENES/VIVIA.webp" }
];
let imgn2 = [
    { nombre: "tinkerbell", url: "IMAGENES/TINKERBELL.jpg" },
    { nombre: "fairy", url: "IMAGENES/FAIRY.jpg" },
    { nombre: "lucero", url: "IMAGENES/LUCERO.jpg" },
    { nombre: "roseta", url: "IMAGENES/ROSETA.jpg" },
    { nombre: "silvermist", url: "IMAGENES/SILVERMIST.jpg" },
    { nombre: "vivia", url: "IMAGENES/VIVIA.webp" },
    { nombre: "hermana", url: "IMAGENES/hermana.jpg" },
    { nombre: "juntas", url: "IMAGENES/juntas.jpg" },
    { nombre: "tinkerbell", url: "IMAGENES/TINKERBELL.jpg" },
    { nombre: "fairy", url: "IMAGENES/FAIRY.jpg" },
    { nombre: "lucero", url: "IMAGENES/LUCERO.jpg" },
    { nombre: "roseta", url: "IMAGENES/ROSETA.jpg" },
    { nombre: "silvermist", url: "IMAGENES/SILVERMIST.jpg" },
    { nombre: "vivia", url: "IMAGENES/VIVIA.webp" },
    { nombre: "hermana", url: "IMAGENES/hermana.jpg" },
    { nombre: "juntas", url: "IMAGENES/juntas.jpg" }
];
let imgn3 = [
    { nombre: "tinkerbell", url: "IMAGENES/TINKERBELL.jpg" },
    { nombre: "fairy", url: "IMAGENES/FAIRY.jpg" },
    { nombre: "lucero", url: "IMAGENES/LUCERO.jpg" },
    { nombre: "roseta", url: "IMAGENES/ROSETA.jpg" },
    { nombre: "silvermist", url: "IMAGENES/SILVERMIST.jpg" },
    { nombre: "vivia", url: "IMAGENES/VIVIA.webp" },
    { nombre: "reina", url: "IMAGENES/reina.webp" },
    { nombre: "hermana", url: "IMAGENES/hermana.jpg" },
    { nombre: "juntas", url: "IMAGENES/juntas.jpg" },
    { nombre: "tinkerbell", url: "IMAGENES/TINKERBELL.jpg" },
    { nombre: "bestia", url: "IMAGENES/bestia.jpg" },
    { nombre: "fairy", url: "IMAGENES/FAIRY.jpg" },
    { nombre: "lucero", url: "IMAGENES/LUCERO.jpg" },
    { nombre: "roseta", url: "IMAGENES/ROSETA.jpg" },
    { nombre: "silvermist", url: "IMAGENES/SILVERMIST.jpg" },
    { nombre: "vivia", url: "IMAGENES/VIVIA.webp" },
    { nombre: "reina", url: "IMAGENES/reina.webp" },
    { nombre: "hermana", url: "IMAGENES/hermana.jpg" },
    { nombre: "bestia", url: "IMAGENES/bestia.jpg" },
    { nombre: "juntas", url: "IMAGENES/juntas.jpg" }
];
let sonidoSelecionar = new Audio("./SONIDOS/retro-blip-2-236668.mp3");
let sonidoadivinar =new Audio("./SONIDOS/level-passed-143039.mp3");
let sonidoFONDO =new Audio("./SONIDOS/background-music-224633.mp3");
let sonidoPERDIO =new Audio("./SONIDOS/error-sound-39539.mp3");
let sonidoGANO =new Audio("./SONIDOS/brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3");
let sonidofallar =new Audio("./SONIDOS/089684_retro-you-lose-sfx-85557.mp3");

sonidoFONDO.loop = true;

let tablero = document.querySelector(".tablero");
let imagenNombre = [];
let imagenID = [];
let aciertos = 0;
let totalintentos = 0;
let totalTiempo =0;
let tiempoSobrante =0;
let intentos = 0;
let tiempo = 60;
let tiempotranscurrido;
let nivel = 1;
let btnIniciar = document.querySelector(".btn");
let mostrarintentos = document.querySelector(".intentos");
let mostraraciertos = document.querySelector(".aciertos");
let mostrartiempo = document.querySelector(".tiempo");
let mostrarnivel = document.querySelector(".nivel");
let imagennivel;
let estoyjugando = false;
let Mostrarjugador = document.querySelector(".jugador");
let tabla = document.querySelector(".records tbody");
let fondobody = document.querySelector("body");

document.addEventListener("DOMContentLoaded", ()=>{
    fondobody.classList.add("fondo1");
    mostrarDatos(); 
});


btnIniciar.addEventListener("click", function () {
    // alert("Juego iniciado");
    sonidoFONDO.play();
    if (estoyjugando == false && nivel == 1) {
        ventanaMolda();
    } else if (estoyjugando == false && nivel == 2) {
        estoyjugando = true;
        nivel2();
    }else if (estoyjugando == false && nivel == 3) {
        estoyjugando = true;
        nivel3();}
        
});

function agregarimagenes() {
    if (nivel == 1) {
        imagennivel = imgn1;
    } else if (nivel == 2) {
        imagennivel = imgn2;
    }else if (nivel == 3) {
        imagennivel = imgn3;
    }
    imagennivel.sort(()=>Math.random() -0.5);


    imagennivel.forEach((img, i) => {
        let div = document.createElement("div");
        div.className = "col-3 my-2";
        let imagen = document.createElement("img");
        imagen.src = "IMAGENES/OCULTAR.jpg";
        imagen.classList = "img-fluid altura";
        imagen.id = i;
        imagen.addEventListener("click", mostrarimg);
        div.appendChild(imagen);
        tablero.appendChild(div);
    });
}

function mostrarimg() {

    sonidoSelecionar.play();

    let imgID = this.getAttribute("id");
    if (this.classList.contains("adivinada")) {
        intentos++;
        mostrarintentos.textContent = intentos;
        return;
    }
    this.src = imagennivel[imgID].url;
    if (imagenID.length > 0 && imagenID[0] === imgID) {
        alert("Debes escoger una imagen diferente");
        this.src = "IMAGENES/OCULTAR.jpg";
        imagenNombre = [];
        imagenID = [];
        return;
    }
    imagenNombre.push(imagennivel[imgID].nombre);
    imagenID.push(imgID);

    if (imagenNombre.length == 2) {
        setTimeout(compararimg, 200);
    }
}

function compararimg() {
    let imagenestableros = document.querySelectorAll(".tablero > div > img");
    if (imagenNombre[0] == imagenNombre[1]) {
        //alert("ADIVINASTE");
        sonidoadivinar.play();
        imagenestableros[imagenID[0]].src = "IMAGENES/4138392.png";
        imagenestableros[imagenID[1]].src = "IMAGENES/4138392.png";
        imagenestableros[imagenID[0]].classList.add("adivinada");
        imagenestableros[imagenID[1]].classList.add("adivinada");
        aciertos++;
        mostraraciertos.textContent = aciertos;
    } else {
        //alert("FALLASTE");
        sonidofallar.play();
        imagenestableros[imagenID[0]].src = "IMAGENES/OCULTAR.jpg";
        imagenestableros[imagenID[1]].src = "IMAGENES/OCULTAR.jpg";
        intentos++;
        mostrarintentos.textContent = intentos;
    }
    imagenNombre = [];
    imagenID = [];

    if (nivel == 1 && aciertos == 6) {
        alert("Felicitaciones pasaste al siguiente nivel 🎉");
        fondobody.classList.replace("fondo1", "fondo2");
        //location.reload();
        totalintentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (60 - tiempo);
        sonidoGANO.play();
        nivel++;
        mostrarnivel.textContent = nivel;
        intentos = 0;
        mostrarintentos.textContent = intentos;
        aciertos = 0;
        mostraraciertos.textContent = aciertos;
        clearInterval(tiempotranscurrido);
        tiempo = 50;
        mostrartiempo.textContent = tiempo;
        estoyjugando = false;
        quitarimg();

    } else if (nivel == 2 && aciertos == 8) {
        alert("Felicitaciones, completaste el juego 🎉");
        fondobody.classList.replace("fondo2", "fondo3");
        sonidoGANO.play();
        nivel++;
        mostrarnivel.textContent = nivel;
        intentos = 0;
        mostrarintentos.textContent = intentos;
        aciertos = 0;
        mostraraciertos.textContent = aciertos;
        clearInterval(tiempotranscurrido);
        tiempo = 45;
        mostrartiempo.textContent = tiempo;
        estoyjugando = false;
        quitarimg();
        obtenerDatos();

    }else if (nivel == 3 && aciertos == 10) {
        alert("Felicitaciones, completaste el juego 🎉");
        sonidoGANO.play();
        location.reload();
    }
}

function nivel1() {
    agregarimagenes();
    mostrarnivel.textContent = nivel;
    tiempojuego();
}

function nivel2() {
    agregarimagenes();
    tiempojuego();
} 
function nivel3() {
    agregarimagenes();
    tiempojuego();
} 


function tiempojuego() {
    tiempotranscurrido = setInterval(() => {
        tiempo--;
        mostrartiempo.textContent = tiempo;
        if (tiempo == 10) {
            mostrartiempo.classList.add("tiempo-agotado");
        } else if (tiempo == 0) {
            alert("El tiempo se agotó, perdiste 😭");
            sonidoPERDIO.play();
            clearInterval(tiempotranscurrido);
            setTimeout(()=>{
                location.reload();
            }, 3000);
           
        }
    }, 1000);
}
function quitarimg() {
    let imagenquitar = document.querySelectorAll(".tablero div");
    imagenquitar.forEach((img)=>{
        img.remove();
    })
    
}

function ventanaMolda() {
    let modal = document.querySelector("#exampleModal");
    let cerrarmodal = document.querySelectorAll(".cerrar");
    let inputjugador = document.querySelector(".nombre-jugador");
    let btnjugador = document.querySelector(".registrar-jugador");

    cerrarmodal.forEach((btn)=>{
btn.addEventListener("click",()=>{
    modal.classList.remove("show");
    modal.style.display = "none";
});

    });

    modal.classList.add("show");
    modal.style.display = "block";
    btnjugador.addEventListener("click",()=>{
Mostrarjugador.textContent= inputjugador.value;
modal.classList.remove("show");
    modal.style.display = "none";
    estoyjugando = true;
        nivel1();
    });
    
}
