// map
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  Opcion 1: Funcion nombrada
function calcularDoble(numero) {
  return numero * 2;
}

const dobles = numeros.map(calcularDoble);

console.log(dobles); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// calcularDoble(5); // 10

// Opcion 2: Funcion anonima
const dobles2 = numeros.map(function (numero) {
  return numero * 2;
});

console.log(dobles2); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Opcion 3: Funcion flecha
const dobles3 = numeros.map((numero) => numero * 2);

console.log(dobles3); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// forEach con funcion flecha
dobles3.forEach((numero) => {
  console.log(numero * 3);
  const resultado = numero * 5;
  console.log(resultado);
});
// 3, 6, 9, 12, 15, 18, 21, 24, 27, 30
// 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

// some
const numeros2 = [1, 3, 5, 7, 9, 11, 12];

const hayPares = numeros2.some((numeroXX) => numeroXX % 2 === 0);

console.log(numeroXX); // ReferenceError: numeroXX is not defined

if (hayPares) {
  console.log("Hay al menos un numero par");
  const todosPares = dobles3.every((num) => num % 2 === 0);
  console.log(todosPares); // true
}
