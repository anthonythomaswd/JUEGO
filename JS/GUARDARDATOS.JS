let NombreJugador = document.querySelector(".jugador");
let listaJugador = "Jugadores";

function obtenerDatos() {
    let datosJugador = {
       "nombre": NombreJugador.textContent,
       "intentos": totalintentos,
       "tiempoTotal": totalTiempo,
       "tiempoSobrante": tiempoSobrante
    }
    console.log(datosJugador);
    guardarDatos(datosJugador);
 }

function guardarDatos(datos) {
    let jugadores = [];
    let datosprevios = JSON.parse(localStorage.getItem(listaJugador));
    if (datosprevios != null) {
        jugadores = datosprevios;
    }
    jugadores.push(datos);
    localStorage.setItem(listaJugador, JSON.stringify(jugadores));
}
function mostrarDatos() {
    let jugadores = [];
    let datosprevios = JSON.parse(localStorage.getItem(listaJugador));
    if (datosprevios != null) {
        jugadores = datosprevios;
    }
    jugadores.sort((a, b)=>{
        if (a.tiempoTotal < b.tiempoTotal) {
            return -1;
        }
        if (a.intentos < b.intentos) {
            return 1;
        }
        
    });

    jugadores.forEach((jugador, i) => {
        let fila = document.createElement("tr");
        fila.innerHTML= `
        <td>${i+1}</td>
        <td>${jugador.nombre}</td>
        <td>${jugador.tiempoTotal}</td>
        <td>${jugador.intentos}</td>
         <td>${jugador.tiempoSobrante}</td>
       ` ;
       tabla.appendChild(fila);
    });

}

