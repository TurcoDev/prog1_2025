/**
 * El área de un círculo se calcula de la siguiente
 * manera: área = π x r x r. Escribe una función
que calcule areaOfCircle
 */
let radio = 4;

function areaOfCircle() {
  const pi = 3.1416; // opcion Math.PI
  let resultado = pi * radio * radio;

  console.log(resultado);
}

areaOfCircle();

radio = 8;
areaOfCircle();

console.log(Math.pow(radio, 2));
