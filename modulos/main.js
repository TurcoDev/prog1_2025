import { mostrarSubMenu } from './submenu.js';
import { calcularDoble, numeros, listarNumeros } from './array.js';

function menu() {
  console.log(`Ingrese la operacion:
    0: salir
    1: listar
    2: agregar`);

  mostrarSubMenu();
  calcularDoble(5);
}

menu();

function agregarNumero() {
  numeros.push(8);
}

// agregarNumero();
console.log(numeros);
console.log("-----------------");

listarNumeros();
