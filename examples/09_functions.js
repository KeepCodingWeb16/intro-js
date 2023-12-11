console.log('Functions');

// sayHi();

// 1 definirla
function sayHi() {
  console.log('Hola');
  console.log('Dentro de la función');
}

// sayHi();
function esMayorDeEdad(age) {
  return age >= 18;
  /*
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
  */
}

// return;

const users = [
  {
    name: 'user 1',
    age: 30,
  },
  {
    name: 'user 2',
    age: 12,
  },
  {
    name: 'user 3',
    age: 10,
  },
  {
    name: 'user 4',
    age: 50,
  }
];

function displayUser(name) {
  console.log(`${name} es mayor de edad vamos a registrar en la web`);
}

for (let { age, name } of users) {
  // const mayorDeEdad = esMayorDeEdad(age);
  // console.log(mayorDeEdad, age, name);
  if (esMayorDeEdad(age)) {
    displayUser(name);
  }
}

function sum(value1 = 0, value2 = 0) {
  return value1 + value2;
}

console.log(sum());

console.log('Final');
