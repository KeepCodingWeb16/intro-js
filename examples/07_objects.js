console.log('Objects');

/*
// producto1
const precio = 190;
const name = 'Air jordan';
const stock = null;

// producto2
const name = 'Zapatos';
const precio = 20;
const stock = 1000;
*/

// const producto = new Object();
const productoEstrella = {
  name: 'Air Jordan',
  precio: 123,
  stock: null,
  // precio: 12,
  // name: 'test',
};

/*
const producto = new Object({
  name: 'Air Jordan',
  precio: 123,
  stock: null,
  precio: 12,
  name: 'test',
});
*/

console.log(productoEstrella);

const fordMustang = {
  brand: 'Ford',
  year: 1969,
  model: 'Mustang',
  firstOwner: 'Keepcoding',
  stock: null,
  country: {
    name: 'USA',
    code: 'us',
  },
  owners: ['Keepcoding', 'Elon', 'Jordan'],
  'second-owner': 'Elon',
};

const cars = [
  fordMustang
];

console.log(fordMustang);

const paginadeProducto = `
Brand ${fordMustang.brand}
Año ${fordMustang.year}
model: ${fordMustang.model}

country: ${fordMustang.country.name}

Owners: ${fordMustang.owners.join(' | ')}
`;

console.log(paginadeProducto);

// ??
console.log(fordMustang['second-owner']);
console.log(fordMustang['year']);

const key = 'year'; // prompt('Que info quieres saber del fordMustang?');
/*
if (key === 'year') {
  console.log(fordMustang.year);
} else if (key === 'model') {
  console.log(fordMustang.model);
*/
// key = 'country.name'
console.log(fordMustang[key]);
console.clear();

const keyId = 'newKey2';

const car = {
  title: 'Car 1',
  year: 1990,
  [keyId]: 12,
};

console.log(car);

console.log(car[keyId]);

car.title = 'Car 2';
car.year = 1970;

car.title = car.title.toUpperCase();

delete car.year;

const removeKeys = ['title'];
for (let index = 0; index < removeKeys.length; index++) {
  const keyToRemove = removeKeys[index];
  delete car[keyToRemove];
}

// info
const shows = [
  {
    id: 1,
    name: 'Under the dome',
    genres: ['Drama', 'Science-Fiction', 'Thriller']
  }, /// 0
  {
    id: 2,
    name: 'Game of thrones',
    genres: ['Drama', 'Thriller'],
    season: {
      title: 'season 1'
    },
  } /// 1
];

let showTemplate = '';

for (let index = 0; index < shows.length; index++) {
  const show = shows[index];
  // mostrar
  showTemplate = showTemplate + `
    <h2>${show.name}</h2>
    <p>${show.genres.join(', ')}</p>
  `;
}
// renderizar
document.write(showTemplate);

/// Object.keys, Object.values, Object.entries for..in, JSON.

const stringValue = JSON.stringify(shows);
const showsCopy = shows;
console.log(showsCopy === shows);
console.log(shows);
console.log(stringValue);
const newShowsArray = JSON.parse(stringValue);
console.log(newShowsArray);

car.year = undefined;

console.log(JSON.parse(JSON.stringify(car)));

console.log('Keys ', Object.keys(shows[1]));
console.log('Values:', Object.values(shows[1]));

console.log('Entries: ', Object.entries(shows[1]));

console.clear();
for (let key in shows[1]) {
  console.log(key);
  const value = shows[1][key];
  console.log(value);
  if (key === 'name') {
    shows[1][key] = '***';
  }
}

console.log('Keys ', Object.keys(shows));

console.log(shows);

console.clear();

const libros = [
  {
    titulo: "El gran Gatsby",
    autor: "F. Scott Fitzgerald",
    año: 1925
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    año: 1997
  },
  {
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    año: 2003
  },
  {
    titulo: "Crepúsculo",
    autor: "Stephenie Meyer",
    año: 2005
  },
  {
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    año: 2008
  }
];

let arrayLibros2000 = [];

for (let i = 0; i < libros.length; i++) {
  const libro = libros[i];
  if (libro['año'] > 2000){
      arrayLibros2000.push(libro.titulo);
  }
}


let modernBooks = [];

for(let book in libros)
{
  if(book.año >= 2000)
      modernBooks.push(book.titulo);
}


console.log(`Libros posteriores al 2000: ${modernBooks.join(', ')}`);