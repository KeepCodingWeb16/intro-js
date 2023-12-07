console.log('Bucles');

const fruits = [
  'apple', // 0
  'banana', // 1
  'kiWi', // 2
  'watermelon', // 3
  'orange', // 4
];

//
let x = 0;
// x = x + 1;
// x += 1;
x++;

/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/

console.log(fruits.length); // 5

console.log(`Last element ${fruits[fruits.length - 1]}`);

for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  /*
  if (fruit.toLowerCase() === 'kiwi') {
    console.log('***');
  } else {
    console.log(fruit);
  }
  */
  fruit.toLowerCase() === 'kiwi' ? console.log('***') : console.log(fruit);
}

/* break - continue */
console.clear();
console.log('break - continue');
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(`Index ${i}`);
  if (fruit.toLowerCase() === 'kiwi') {
    // break;
    continue;
  } else {
    console.log(fruit);
  }
  console.log('Final de cada iteración')
}

let fruitsNoKiwi = [];
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  if (fruit.toLowerCase() !== 'kiwi') {
    fruitsNoKiwi.push(fruit);
  }
}

console.clear();
console.log(fruits);
console.log(fruitsNoKiwi);

if (!fruitsNoKiwi.includes('kiwi')) {
  console.log('Mariano feliz!');
}


const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];
const pares = [];
const impares = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === null || numbers[i] === "" || numbers[i] === false){
    } else if (numbers[i] % 2 !== 0){
        impares.push(numbers[i]);
    } else {
        pares.push(numbers[i]);
    }
}

console.log(numbers);
console.log(pares);
console.log(impares);


let list_num = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false]
let list_even = []
let list_odd = []


for(let i = 0; i<list_num.length; i++)
{
    if(typeof list_num[i] === "number" )
    {
        if(list_num[i] % 2 === 0)
            list_even.push(list_num[i]);
        else
            list_odd.push(list_num[i]);
    }
}

console.log('The original list is: ' + list_num);
console.log('The even numbers are: ' + list_even);
console.log('The odd numbers are: ' + list_odd);
console.clear();

const matrix = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9],  // 2
];

console.log(Array.isArray(matrix[1])); // [4, 5, 6]

console.time('prueba');
for (let index = 0; index < matrix.length; index++) {
  const rows = matrix[index]; // [1, 2, 3]
  console.log('rows', rows);
  for (let columnIndex = 0; columnIndex < rows.length; columnIndex++) {
    const colums = rows[columnIndex];
    console.log('columns', colums);
  }
}
console.timeEnd('prueba');

console.clear();

/// while
let index = 0;
while (index < 400) {
  console.log('Dentro del while');
  if (index < 100) {
    index = index + 1;
  } else {
    index = index + 100;
  }
}
/*
const presents = [];
while (true) {
  const newPresent = prompt('Añadir regalo: ');
  console.log(newPresent);
  if (!newPresent) {
    break;
  }
  presents.push(newPresent);
  console.log(`Lista de regalos ${presents.join(', ')}`);
  // continue y break
}
*/

while (true) {
  const userChoice = prompt(
    "Elige tu jugada (escribe piedra / papel / tijera, o salir para abandonar el juego): "
  );
  console.log(userChoice);
  if (userChoice === "salir") {
    break;
  }

  if (userChoice === "papel") {
    console.log("Ganaste tu tienes papel y el rival piedra");
  } else if (userChoice === "tijera") {
    console.log("Perdiste tu tienes tijeras y el rival piedra");
  } else if (userChoice === "piedra") {
    console.log("Empate ambos tienen piedra");
  } else {
    console.log("opción incorrecta");
  }
}

while (true) {
  const ROCK = 'piedra';
  const validOptions = [ROCK, 'tijera', 'papel', 'salir'];
  const userChoice = prompt(
    `Elige tu jugada (escribe (${validOptions.join(' / ')}) para abandonar el juego): `
  );

  if (!validOptions.includes(userChoice)) {
    console.log(`Opción ${userChoice} no valida`);
    continue;
  }

  if (userChoice === "salir") {
    break;
  }

  const rival = [ROCK, 'tijera', 'papel']
  const rivalOption = rival[0]; // TODO: añadir aleatorio

  if (rivalOption === userChoice) {
    // empate
  } else if (
    (rivalOption === ROCK && userChoice === 'papel') ||
    (rivalOption === 'papel' && userChoice === 'tijera')
  ) {
    console.log(`Ganaste con ${userChoice} y el rival tiene ${rivalOption}`);
  } else {
    console.log(`Perdiste con ${userChoice} y el rival tiene ${rivalOption}`);
  }
}
