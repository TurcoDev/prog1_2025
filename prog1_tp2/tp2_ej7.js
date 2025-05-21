// Ejercicio 7
var num1 = 5;
var num2 = 10;
var num3 = 20;

if (num1 > num2 && num1 > num3) {
  console.log("num1 es mayor con: ", num1);
  if (num2 > num3) {
    console.log("num3 es menor con: ", num3);
    console.log("num2 esta en medio con: ", num2);
  } else {
    console.log("num2 es menor con: ", num2);
    console.log("num3 esta en medio con: ", num3);
  }
} else if (num2 > num3) {
  console.log("num2 es mayor con: ", num2);
  if (num1 > num3) {
    console.log("num3 es menor con: ", num3);
    console.log("num1 esta en medio con: ", num1);
  } else {
    console.log("num1 es menor con: ", num1);
    console.log("num3 esta en medio con: ", num3);
  }
} else {
  console.log("num3 es mayor con: ", num3);
  if (num1 > num2) {
    console.log("num2 es menor con: ", num2);
    console.log("num1 esta en medio con: ", num1);
  } else {
    console.log("num1 es menor con: ", num1);
    console.log("num2 esta en medio con: ", num2);
  }
}
