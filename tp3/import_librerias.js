var prompt = require('prompt-sync')();

var datoIngresado = prompt('Poneme algo bonito');

console.log("Me pusiste esto: ", datoIngresado);

var numero = prompt('Poneme un numero');

console.log("Me pusiste el numero: ", numero);
console.log("El tipo de dato es: ", typeof numero);
console.log("El tipo de dato es: ", typeof parseInt(numero));
console.log("El tipo de dato es: ", typeof Number(numero));