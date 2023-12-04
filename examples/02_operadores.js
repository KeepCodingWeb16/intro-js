// asignación

let x = 10;
let y = 5;


// aritméticos
console.log(x + y);

const suma = x + y;

console.log(suma);

const differencia = suma / 2;

const producto = x * y;

console.log(differencia);

const modulo = 4 % 2;

console.log(`modulo: ${modulo}`);

console.log('modulo: ' + modulo);

console.log('12' - '1'); //wat

console.log('12D' - 1);

// x = x + 50;
x += 50;
x++; // x = x + 1;
console.log(x); /// 61

// y = y - 2;
y -= 2;
y--; // y = y - 1
console.log(y);

const discount = 0.3;
const precio = 190.99;
const stock = null;
const item = 'Zapatillas "Air Jordan"';
const templateProducto = `
Producto: ${item}
Precio: ${precio - (precio * discount)}
stock: ${stock}
`;

/// operadores de comparación
console.log('<---operadores de comparación--->');
console.log('Hola' === 'Hola');

const num = '12';
console.log(num !== 12);
// si es true num + 3 => 15

console.log('Hola' !== 'Hola');

let a = 5, b = 8;

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(' 🤔 ');
console.log(NaN === NaN); // 🤔 wat isNaN(variable probar)

const fileSize = 100;

const isLoading = fileSize < 100;

// operadores lógicos
console.log('<--operadores lógicos-->');
const isPublic = false;

// const isValid = nombre === '' || edad === 0;

// not !

const nombre = 'Jordan';

const bestPlayer = nombre === 'Jordan';
