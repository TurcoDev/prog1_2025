/***
 * 2. Competencia de lanzamientos
Simular una competencia entre jugadores que lanzan dados por puntos.
 Cada jugador lanza 5 veces un dado (valor entre 1 y 6).
 Considera 10 jugadores, pero el numero puede variar.
 Sumar sus puntos totales.
 El que más puntos obtiene gana.
 Mostrar el ganador y los resultados finales de todos.
 Funciones: crearJugadores, realizarLanzamientos, mostrarPuntajes,
mostrarGanador, etc.
 */

const jugadores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let puntajeGanador = 0;
let posGanador = -1;

function jugar() {
  for (let posJugador = 0; posJugador < jugadores.length; posJugador++) {
    for (let tiro = 0; tiro < 5; tiro++) {
      jugadores[posJugador] += Math.floor((Math.random() * 6) + 1);
      // jugadores[posJugador] = jugadores[posJugador] + Math.floor((Math.random() * 6) + 1);
    }
    if (puntajeGanador < jugadores[posJugador]) {
      puntajeGanador = jugadores[posJugador];
      posGanador = posJugador;  
    }
  }
  console.log("Los puntajes finales son: " + jugadores);
  console.log("El ganador es: " + posGanador + " con: " + puntajeGanador);
}

// jugar();

/***
 * Utilizamos varias funciones con parametros
 */

function tirarDados(cantidadTiros, posJugador1) {
  for (let tiro = 0; tiro < cantidadTiros; tiro++) {
    jugadores[posJugador1] += Math.floor((Math.random() * 6) + 1);
  }
}

function obtenerGanador(posJugador2) {
  if (puntajeGanador < jugadores[posJugador2]) {
    puntajeGanador = jugadores[posJugador2];
    posGanador = posJugador2;
  }
}

function mostrarResultados() {
  console.log("Los puntajes finales son: " + jugadores);
  console.log("El ganador es: " + posGanador + " con: " + puntajeGanador);
}

function jugar2() {
  for (let posJugador = 0; posJugador < jugadores.length; posJugador++) {
    tirarDados(5, posJugador);
    obtenerGanador(posJugador);
  }
  mostrarResultados();
}

jugar2();