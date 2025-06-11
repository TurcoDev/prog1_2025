const numeros = [1,2,34,5,6]

function parImpar() {
  let impares = [];
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares[pares.length] = numeros[i];
    } else {
      impares[impares.length] = numeros[i];
    }
  }
  console.log(`Los números pares son: ${pares}`);
  console.log(`Los números impares son: ${impares}`);
  
}

parImpar();