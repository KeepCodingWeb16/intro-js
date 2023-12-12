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

function sum(value1 = 0, value2 = 0, value3 = 0) {
  return value1 + value2 + value3;
}

const suma = function (value1 = 0, value2 = 0, value3 = 0) {
  return value1 + value2 + value3;
};

// console.log(suma(1, 2));

const crearSaludo = function (nombre) {
  console.log('Se ejecuta?');
  return `Hola ${nombre}`;
};

const saludoPersona = crearSaludo;

console.log(saludoPersona('Persona 1'));

// arrow => 
/*
const sumArrow = (value1 = 0, value2 = 0, value3 = 0) => (
  value1 + value2 + value3
);
*/
const getAdmin = () => (
  {
    name: 'Keepcoding',
    role: 'ADMIN',
  }
);

// console.log(sumArrow(0, 2));
console.log(getAdmin());
console.log('Final');
console.clear();

/// this function vs arrow

const obj = {
  value: 20,
  noArrow: function () {
    console.log('No arrow function', this.value);
    function insideFunction() {
      console.log('Inside function', this.value);
    }

    insideFunction()
  }
};

console.log(obj.noArrow());

/// rest params

const sumArrow = (...params) => {
  let result = 0;
  for (let num of params) {
    result += num;
  }
  return result;
};

console.log(sumArrow(1, 2, 3));

const adminUser = {
  name: 'Keepcoding',
  role: 'ADMIN',
  password: 'wqerty23123',
  courses: [],
  age: 28,
  active: true,
};

/*
const getUserInfo = (user) => {
  // ??
  const newUser = structuredClone(user);
  delete newUser.password;
  return newUser;
};
*/

const getUserInfo = ({ password, ...otrasProps }) => otrasProps;


const adminInfo = getUserInfo(adminUser);
console.log(adminUser);
console.log(`usuario name: ${JSON.stringify(adminInfo)}`);


let temperatura = parseInt(prompt("Ingresa la temperatura: "));
let escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K): "
)
  .trim()
  .toString()
  .toUpperCase();

const conversorTemp = (temp, escala) => {
  if (isNaN(temperatura)) {
    return "La temperatura introducida no es válida";
  } else {
    if (escala === "C") {
      conversion = temperatura - 273.5;
      return `La temperatura en Celsius es: ${conversion}°C`;
    } else if (escala === "K") {
      conversion = temperatura + 273.5;
      return `La temperatura en Kelvin es: ${conversion}K`;
    } else {
      return "Error de escala";
    }
  }
};

let numeros = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false]

const calculNum = (list, parOrImp) => {
  let impares = [];
  let pares = [];
  for (let index = 0; index < list.length; index++) {
    const numero = list[index];
    if (typeof numero === 'number') {
      if (numero % 2 != 0) {
        impares.push(numero)
      } else {
        pares.push(numero)

      }
    }
  }
  return (parOrImp === "par" ? pares :  impares);
}
