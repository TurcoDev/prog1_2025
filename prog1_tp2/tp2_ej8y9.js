// Ejercicio 8

let num1 = 5;
let num2 = 10;
let num3 = 20;
let num4 = 0;


let multiplicacion = num1 * num2 * num3 * num4;
let suma = num1 + num2 + num3 + num4;

if (suma > 30 && multiplicacion < 400) {
  console.log("Se cumplen ambas condiciones", suma, multiplicacion);
} else{
  console.log("No se cumplen ambas condiciones", suma, multiplicacion);
}

// Ejercicio 9
if (suma > 30 && multiplicacion < 400) {
  console.log("Se cumple ambas condiciones");
} else if (suma > 30) {
  console.log("Se cumple la primera condicion");
}
else if (multiplicacion < 400) {
  console.log("Se cumple la segunda condicion");
}
else {
  console.log("No se cumple ninguna condicion");
}