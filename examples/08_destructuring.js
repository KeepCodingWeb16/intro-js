console.log('Destructuring + spread operator');

const books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
  },
  { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
  { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
];

let arrayLibros2000 = [];

for (let i = 0; i < books.length; i++) {
  const { year, titulo } = books[i]; // destructuring bookElement
  if (year > 2000){
      arrayLibros2000.push(titulo);
  }
}

const { year, author } = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
};
      // 0 ,   1
const [pos1, { title, year: secondBookYear }] = books;

console.log(pos1, secondBookYear);

const twilight = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 };

console.log(Object.entries(twilight));

let modernBooks = [];

for(let { year, title } of books) {
  if (year >= 2000)
    modernBooks.push(title);
}

for (let [key, value] of Object.entries(twilight)) {
  console.log(key);
  console.log(value);
}
console.clear();

const user = {
  role: 'ADMIN',
  username: 'keepcoding',
  courses: ['nodejs', 'html'],
  country: {
    code: 'es',
    name: 'Spain',
  },
};

// structuredClone
// const studentUser = structuredClone(user);
// JSON.parse(JSON.stringify())
// const studentUser = JSON.parse(JSON.stringify(user));
const studentUser = {
  ...user,
  role: 'STUDENT',
  username: 'kevin',
  experience: 2,
  country: {
    ...user.country,
    city: 'Madrid',
  },
}; /// Object.assign({}, user);

const product = {
  name: 'Air jordan',
  price: 190,
};

const stockInfo = {
  stock: null,
};

const finalProduct = { ...product, ...stockInfo };
console.log(finalProduct);

// studentUser.role = 'STUDENT';
// studentUser.username = 'kevin';
// studentUser.country.code = 'us';
// studentUser.country.name = 'USA';
console.log(studentUser);
console.log(user);

if (user.role === 'ADMIN' && user.username === 'keepcoding') {
  console.log('Empecemos curso');
} else {
  console.log('No hay admin');
}

// const booksNoHungerGames = structuredClone(books);
const booksNoHungerGames = [...books]; /// [].concat(books);

booksNoHungerGames.pop();
booksNoHungerGames[0].author = 'keepcoding';
console.log(books);
console.log(booksNoHungerGames);

const fruits = ['apple', 'banana'];
const presents = ['TV', 'PS5'];

const shoppingBag = [...fruits, ...presents, 'js course'];

console.log(shoppingBag);
console.clear();

const stringBook = 'titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008';

const [titulo, autor, anio] = stringBook.split(' | '); // ['titulo: Los juegos del hambre', 'autor: Suzanne Collins', 'año: 2008']
const book = {
  title: titulo.replace('titulo: ', ''),
  author: autor.replace('autor: ', ''),
  year: parseInt(anio.replace('año: ', ''))
};
