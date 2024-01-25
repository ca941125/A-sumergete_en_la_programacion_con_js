// 1-Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo(){
    console.log("¡Hola, mundo!");
}

console.log(saludo);

// 2-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludar(nombre){
    console.log("¡Hola," + nombre + "!");
}
saludar("Carolina");

// 3-Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function calcularDoble(numero){
    return numero * 2;
}
let resultadoDoble = calcularDoble(3);
console.log(resultadoDoble);

// 4-Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedio(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

let promedio = calcularPromedio(5, 42, 25);
console.log(promedio);

// 5-Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function devuelveElMayor(a, b){
    return a > b ? a : b;
}

let numeroMayor = devuelveElMayor(35, 349);
console.log(numeroMayor);

// 6-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);