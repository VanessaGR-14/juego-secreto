/**Desafíos:
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. */

function saludar(nombre){
    return `hola, ${nombre}`;
}

let saludo = saludar('sofia');
console.log(saludo);

function numeroDoble(numero){
    return numero*2;
}

let num = numeroDoble(8);
console.log(num);

function buscarPromedio(num1, num2, num3) {
    let cantidadNum = 3;
    let suma = num1 + num2 + num3;
    return suma/cantidadNum;

}

console.log(buscarPromedio(2,4,4));

// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.