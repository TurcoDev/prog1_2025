var myName = "Juan";
saludo(); // llamdado a la funcion saludo

console.log("Voy a realizar una suma de dos numeros");
let result = 5 + 10;

var myName = "Pedro";
saludo(); // llamdado a la funcion saludo

console.log("El resultado de la suma es: " + result);
console.log("Voy a realizar una resta de dos numeros");

var myName = "Maria";

// Definicion de la funcion saludo
function saludo() {
  console.log("-------------------");
  console.log("Hola como estas" + myName + "?");
  console.log("Estoy bien, gracias por preguntar.");
  console.log("-------------------");
}

saludo(); // llamdado a la funcion saludo

function saludo2(myNameInput) {
  console.log("-------------------");
  console.log("Hola como estas " + myNameInput + "?");
  console.log("Estoy bien, gracias por preguntar.");
  console.log("-------------------");   
}

saludo2("Juan");
saludo2("Pedro");
saludo2("Maria");
saludo2();

function alcance() {
    var myName = "Roberto";
    console.log("Hola, mi nombre es " + myName);
    var apellido = "Gomez";
    console.log("Mi apellido es " + apellido);
}

alcance(); // llamdado a la funcion alcance

console.log(myName); // Imprime "Maria" porque la variable myName es global
console.log("Mi apellido es " + apellido);