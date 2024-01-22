// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log("¡Hola, bienvenido!")

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje 
//"¡Hola, [tu nombre]!" en la consola del navegador.

let nombre = "Carolina";
console.log(`Hola, ${nombre}!`);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".


// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
//Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguajePreferido);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
//Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
//Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 29;
let valor2 = 94;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
//utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = prompt('Ingresa tu edad: ');
if (edad > 17) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// Crea una variable "numero" y solicita un valor con prompt. 
//Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt('Ingrese un numero: ');

if (numero > 0) {
   console.log("El número es positivo");
} else if (numero < 0) {
 console.log("El número es negativo");
} else {
   console.log("El número es cero");
}
