var prompt = require('prompt-sync')();

// simulacion de aplicaion de muebles

const furniture1 = {
  nameF: 'Silla',
  material: 'metal'
}
const furniture2 = {
  nameF: 'Mesa',
  material: 'madera'
}

const furniture = [furniture1, furniture2];

function getFurniture(inFurniture) {
  return inFurniture;
}

function addFurniture(inFurniture, newFurniture) {
  inFurniture.push(newFurniture);
}


function menu() {
  console.log(`Ingrese la operacion:
    0: salir
    1: listar
    2: agregar`);
    const opcion = prompt("su opcion es: ");
    return Number(opcion);
}

function main() {
  let resp;
  do {
    resp = menu();
    if (resp == 1) {
      console.log(getFurniture(furniture));
    }
  } while (resp != 0);
}

main();