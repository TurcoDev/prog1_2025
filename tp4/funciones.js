let nombreGlobal = "Global";
var nombreVar = "Variable";

function saludo() {
  let nombreDefecto = "Defecto";
  nombreVar = "Variable Local";

  for (let i = 0; i < 5; i++) {
    console.log(`Hola, bienvenido ${i} vez esta función saludo!`);
    console.log('Hola, bienvenido ' + i + ' vez esta función saludo!');
  }
  console.log("Gracias por visitar la función saludo!");

  console.log(`El nombre por defecto es: ${nombreDefecto}`);
  console.log(`El nombre global es: ${nombreGlobal}`);
  console.log(`El nombre de la variable local es: ${nombreVar}`);
  console.log(`El nombre de la variable global es: ${nombreConstante}`);  
}

// console.log(nombreDefecto); // Esto causará un error porque nombreDefecto no está definido en este ámbito
console.log(`El nombre de la variable es: ${nombreVar}`);
const nombreConstante = "Constante";
// nombreConstante = "Nuevo Valor"; // Esto causará un error porque las constantes no pueden ser reasignadas
saludo();

const array = [1, 2, 3, 4, 5];
//array = [1, 2, 3, 4, 5, 6]; // Esto causará un error porque las constantes no pueden ser reasignadas
array[2] = 88;
console.log(array);
