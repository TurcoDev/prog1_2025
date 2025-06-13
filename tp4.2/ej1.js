
const num1 = 5;
const num2 = 10;

function suma(a, b) {
  console.log(a + b);
}

suma(num1, num2);
suma(4, 8);
suma(num2, 10);
suma(25, num1);
suma('aa', 25);
suma(true, 'aa');
suma(2, false);

// suma(suma(suma(25,35), 58), 85); // esto funciona con return en la funcion
