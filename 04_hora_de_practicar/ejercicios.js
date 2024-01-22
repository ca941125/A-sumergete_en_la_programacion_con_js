// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
//Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
//Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 29;
let valor2 = 94;
let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`)

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);