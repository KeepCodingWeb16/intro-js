
const username = 'KeepCodingUser';
const password = '    ab    ';
// const passwordTrimmed = password.trim();
if (password.trim().length < 3) {
  console.log('Password no valida');
}

const precio = 2;

// console.log(username.length);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(password.trim());

const email = 'Kevin.Kevin@email.test  ';

console.log(email.toLowerCase().trim());

console.log(email.toLowerCase().trim().includes('@email.test'));
console.log(email.replaceAll('Kevin', '***'));
console.log(email.trim().endsWith('@email.test'));

let temp = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt("Ingresa la escala a la que quieras cambiar tu temperatura (C o K)").trim();
let esc = ""

if (typeof temp === "number" && !Number.isNaN(temp)) {
    if (escala.toUpperCase() === "C") {
        temp = temp - 273.15;
        esc = "Celsius"
    } else {
        temp = temp + 273.15;
        esc = "Kelvin"
    }
    console.log(`La temperatura en ${esc} es: ${temp}º${escala.toUpperCase()}`)
} else{
    console.log("La temperatura ha de ser un número.")
}


let temperature = parseFloat(prompt('Ingresa la temperatura: ').trim()); //parseFloat lo convierte a un float
let scale = prompt('Ingresa la escala a la que quieras cambiar tu temperatura (C o K): ').toLowerCase().trim(); // Convierte a minúsculas;

// Verificar si la entrada es un número
if (isNaN(temperature)) {
  console.log('Por favor, ingresa un número válido para la temperatura.');
} else if (scale === 'c') {
  conversion = temperature - 273.15;
  console.log(`La temperatura en Celsius es: ${conversion.toFixed(2)}°C`);
} else if (scale === 'k') {
  conversion = temperature + 273.15;
  console.log(`La temperatura en Kelvin es: ${conversion.toFixed(2)}K`);
} else { 
  console.log('Error de escala');
}
