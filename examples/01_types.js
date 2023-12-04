
let precio = 190.99;

let producto = 'Zapatillas "Air Jordan"';
producto = "Zapatillas \"Air Jordan\"";

let stock = Infinity;

stock = 0;

stock = null;

stock = 8;

console.log(typeof stock);

/*
cammelCase
snake_case
PaskalCase
kebab-case
*/

// template string!!!!!
let templateProducto = `
Producto: ${producto}
Precio: ${precio}
stock: ${stock}
`;

console.log(templateProducto);

producto = 'Zapatos';
precio = 10;

templateProducto = `
Producto: ${producto}
Precio: ${precio}
stock: ${stock}
`;

let hasStock = false; // true

console.log(templateProducto);

// Declaración de variables
let anno = 60;
let jugador = "Jordan";
let dorsal = 23;
let salonDeLaFama = true;
let equipoActual = "ninguno";

// Mostrar el tipo de las variables
console.log(typeof anno); // number
console.log(typeof jugador); // string
console.log(typeof dorsal); // number
console.log(typeof salonDeLaFama); // boolean
console.log(typeof equipoActual); // string

// Mostrar el mensaje
console.log(`Soy ${jugador} de ${anno} años, ahora mi equipo es: ${equipoActual}`);


// Bigint
let numeroGrande = 1234567890123456789012345678901234567890n;

console.log(typeof numeroGrande);
