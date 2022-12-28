// --------------------------------assignments-------------

// 1) Создайте объект, представляющий вызываемую собаку, myDog который содержит свойства name (строку) legs, tails и friends.

// Вы можете установить для этих свойств объекта любые значения, которые вы хотите, если name это строка,

// числа и legs массив .tails friends

// ----  -- - -- Answer  - -- --------

const myDog = {
  // Only change code below this line
  name: 'Friend',
  legs: 4,
  tails: 1,
  friends: ['Mouse', 'Cat'],

  //   // Only change code above this line
};

// --------------------------------assignments-------------

// 2) Считайте значения свойств с testObj c помощью записи через точку.
// Установите переменную hatValue равной свойству объекта hat и установите
// переменную shirtValue равной свойству объекта shirt.

// ----  -- - -- Answer  - -- --------

// // Setup
const testObj = {
  hat: 'ballcap',
  shirt: 'jersey',
  shoes: 'cleats',
};

// 3) Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

// --------------------------------assignments-------------

// Прочитайте значения свойств an entreeи the drink
// использования testObjс кобочной нотации и присвойте
// их соответственно entreeValueи drinkValue.

// ----  -- - -- Answer  - -- --------

// Setup
const testObj = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water',
};
// // Only change code below this line
const entreeValue = testObj['an entree']; // Change this line
const drinkValue = testObj['the drink']; // Change this line

// ------------------------assignments------------------

// 4) Установите playerNumber переменную в 16. Затем используйте переменную,
//    чтобы найти имя игрока и присвоить его player.

// ------------------------ Answer  --------------------

// Setup
const testObj = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas',
};

// // Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber]; // Change this line

// ------------------------assignments------------------

// 5) Обновите myDogсвойство имени объекта. Давайте изменим ее имя с Coderна Happy Coder.
//    Вы можете использовать либо точку, либо квадратную нотацию.

// ------------------------ Answer  --------------------

// Setup
const myDog = {
  name: 'Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
};

// Only change code below this line
myDog['name'] = 'Happy Coder';

// ------------------------assignments------------------

// 6) Добавьте bark свойство myDog и задайте для него звук собаки, например "woof".
//  Вы можете использовать либо точку, либо квадратную нотацию.

// ------------------------ Answer  --------------------

const myDog = {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
};

myDog['bark'] = 'woof';

// ------------------------assignments------------------

// 7) Удалить tails свойство из myDog. Вы можете использовать либо точку, либо квадратную нотацию.

// ------------------------ Answer  --------------------

// Setup
const myDog = {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: ['freeCodeCamp Campers'],
  bark: 'woof',
};

// Only change code below this line

delete myDog['tails'];

// ------------------------assignments---------------

// 8) Преобразуйте оператор switch в объект с именем lookup. Используйте его,

// чтобы найти val и присвоить связанную строку result переменной.

// ------------------------ Answer  --------------------

// Setup
function phoneticLookup(val) {
  let result = '';

  // Only change code below this line
  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup('charlie');

// ------------------------assignments------------------

// 9) Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный функции ( obj), определенное свойство ( checkProp). Если свойство найдено, верните значение этого свойства. Если нет, верните "Not Found".

// ------------------------ Answer  --------------------

function checkObj(obj, checkProp) {
  // Only change code below this line
  let myObj = {
    gift: 'pony',
    pet: 'kitten',
    bed: 'sleigh',
    city: 'Seattle',
  };

  return obj.hasOwnProperty(checkProp) ? myObj[checkProp] : 'Not Found';

  return 'checkProp';

  // Only change code above this line
}

// ------------------------assignments------------------

// 10) Добавьте новый альбом в myMusic массив. Добавьте artistи title строки, release_year число и formats массив строк.

// ------------------------ Answer  --------------------

const myMusic = [
  {
    artist: 'Billy Joel',
    title: 'Piano Man',
    release_year: 1973,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },
  {
    artist: 'Daft Punk',
    title: 'Homework',
    release_year: 1997,
    formats: ['CD', 'Cassette', 'LP'],
    gold: true,
  },
];

// ------------------------assignments------------------

// 11) Получите доступ к myStorage объекту и назначьте содержимое
// glove box свойства gloveBoxContents переменной.
// По возможности используйте запись через точку для всех свойств,
// в противном случае используйте запись в квадратных скобках.

// ------------------------ Answer  --------------------

const myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};

const gloveBoxContents = myStorage.car.inside['glove box'];

// ------------------------assignments------------------

// 12) Используя нотацию с точкой и квадратными скобками, установите переменную secondTreeна второй элемент в treesсписке от myPlantsобъекта.

// ------------------------ Answer  --------------------

const myPlants = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'dandelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
];

const secondTree = myPlants[1].list[1];

// ------------------------assignments------------------

// 13) Вам дан объектный литерал, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный идентификационный номер в качестве ключа и несколько других свойств. Не все альбомы имеют полную информацию.

// Вы начинаете с updateRecords функции, которая принимает литерал объекта records, содержащий коллекцию музыкальных альбомов, id, а prop(like artist или tracks) и value. Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный функции.

// Ваша функция всегда должна возвращать весь объект коллекции записей.
// Если prop нет tracks и value не является пустой строкой, обновите или установите для этого альбома prop значение value.
// Если prop есть, tracks но в альбоме нет tracks свойства, создайте пустой массив и добавьте value в него.
// Если prop это tracks и value не пустая строка, добавьте value ее в конец существующего tracks массива альбома.
// Если value это пустая строка, удалите данное prop свойство из альбома.
// Примечание.recordCollection Для тестов используется копия объекта.

// ------------------------ Answer  --------------------

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === 'tracks') {
    records[id][prop] ??= [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
