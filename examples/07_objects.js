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
