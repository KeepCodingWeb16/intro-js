//           0    1         2       3
let fruits = [,'apple', 'banana', 'kiwi'];

console.log(fruits[0]);

fruits = [
  'banana',
  'orange',
  'apple'
];

console.log(fruits[0].toUpperCase());

fruits[1] = 'kiwi';

console.log(fruits.length);

fruits.push('watermelon');

console.log(fruits);

fruits.pop();

console.log(fruits);

const index = fruits.indexOf('kiwi'); /// 1 -1
console.log(index);

//      0       1        2
// ['banana', 'kiwi', 'apple']
fruits.splice(index, 1);

console.log(fruits);

const presents = ['TV', 'PS5'];

const shoppingBag = fruits.concat(presents);

console.log(shoppingBag.reverse());

console.log(shoppingBag.includes('TV'));
// let fruit = new Array();

const matrix = [
  [1, 2, 3], /// 0
  [4, 5, 6], // 1
  [
    7, // 0
    ['drama', 'comedia', 'accion'], // 1
    9 // 2
  ] // 2
];
          // 0  1  2
const arr = [7, 8, 9];

console.log(matrix[2][1].join(', '));

/* Soluciones alumnos */

// Paso 1: Crea un array vacío llamado "numeros"
let numeros = new Array();

// Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
numeros.push(1, 2, 3, "Keepcoding", 4, 5);

// Paso 3: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
if (numeros.includes("Keepcoding"))
  console.log("Este array no solo tiene numeros");

// Paso 5: Agrega el número 10 al inicio del array "numeros"
numeros.unshift(10);

// Paso 6: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
let position = numeros.indexOf("Keepcoding");

// Paso 8: Elimina la palabra keepcoding a partir del índice anterior
numeros.splice(position, 1);

// Paso 9: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 10: Imprime la longitud del array "numeros" en la consola
console.log(numeros.length);


let numbers = [];

numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push("keepcoding");
numbers.push(4);
numbers.push(5);

console.log(numbers);

if (numbers.includes("keepcoding")) {
    console.log("Este arary no solo tiene números");
}

numbers.unshift(10);

console.log(numbers);

console.log(numbers.indexOf("keepcoding"));

numbers.splice(4,1);

console.log(numbers);

console.log(numbers.length);
