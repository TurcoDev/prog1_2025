let num1 = 10;
let num2 = 20;
let num3 = 30;

let numeros = [1, 2, 3, 4, 5, num1, 7, 8, 9, 10];
console.log(numeros);

num1 = 20;
numeros[0] = 20;
console.log(numeros);

console.log("El valor de numero en posicion 5 es: " + numeros[5]);

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
let numeros2 = [1, 2, 3, 4, 5, num1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numeros2.length; i++) {
  console.log("El valor de numeros en posicion " + i + " es: " + numeros2[i]);
}

let whileIter = 0;
while (whileIter < numeros2.length) {
  console.log("While en posicion " + whileIter + " es: " + numeros2[whileIter]);
  whileIter++;
}

let doIter = 0;
do {
  console.log("Do en posicion " + doIter + " es: " + numeros2[doIter]);
  doIter++;
} while (doIter < numeros2.length)

for (let i = numeros2.length - 1; i >= 0; i--) {
  console.log("Decremento posicion " + i + " es: " + numeros2[i]);
}