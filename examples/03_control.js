
// let age = parseInt(prompt('Añadir edad:'), 10);
let age = 30;
if (age >= 18) {
  // comentarios
  let age = 20;
  console.log('Eres mayor de edad');
} else if (age >= 14) {
  console.log('Eres un adolescente');
} else {
  console.log('No eres mayor de edad ni adolescente');
}

/*
let age2 = 60;
let player = 'Jordan';
let num = 23;
let isSaleFame = true;
let team = null;
let msg= `Soy ${player} de ${age2} años ahora mi equipo es ${team === null ? "ninguno" : team}`;
*/

const message = age === 30 ? 'Tienes mi edad' : 'No tienes mi edad';

let message2 = '';

if (age === 30) {
  message2 = 'Tienes mi edad';
} else {
  message2 = 'No tienes mi edad';
}

console.log(message);
console.log(message2);

const day = prompt('Dia de la semana?');

switch (day) {
  case 'Monday': 
    console.log('Clase de JS a las 7 Monday');
    break;
  case 'Tuesday':
    console.log('Clase de JS a las 7 Tuesday');
    break;
  case 'Thursday':
    console.log('Clase de JS a las 7 Thursday');
    break;
  default:
    console.log('A descansar');
    break;
}
// && AND
// || OR
if (day === 'Monday' || day === 'Tuesday' || day === 'Thursday') {
  console.log(`Clase de JS a las 7 ${day}`);
} else {
  console.log('A descansar');
}

/* Soluciones */

let temperatura = parseInt(prompt("Ingresa la temperatura: "));
let escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K): "
);
let conversion;

if (escala === "C") {
  conversion = temperatura - 273.15;
  console.log(`La temperatura en Celsius es: ${conversion}°C`);
} else if (escala === "K") {
  conversion = temperatura + 273.15;
  console.log(`La temperatura en Kelvin es: ${conversion}K`);
} else {
  console.log("Error de escala");
}

let temp = parseFloat(prompt('Ingresa la temperatura: '));
let scale = prompt('Ingresa la escala a la que quieras cambiar tu temperatura (C o K):');

switch (scale){
    case 'K':
        console.log(`La temperatura en Kelvin es: ${temp + 273.15}K`);
        break
    case 'C':
        console.log(`La temperatura en Celsius es: ${temp - 273.15}ºC`);
        break;
    default:
        console.log(`Error de escala`)
}

const temperature = +prompt('Insert the temperature: ');
const tempScale = prompt('Insert the scale that you want to change the temperature (C o K): ');

let asw = tempScale === 'C' ? (temperature - 273.15) : (temperature + 273.15);

console.log(`The temperature in ${tempScale} is : ${asw}`);