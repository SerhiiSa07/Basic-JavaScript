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


// ------------------------assignments------------------

// 14) Добавьте числа от 5 до 0 (включительно) в порядке убывания, чтобы myArrayиспользовать whileцикл.


// ------------------------ Answer  --------------------


// Setup
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i)
  i--;
}
// Only change code below this line


// ------------------------assignments------------------


// 15) Используйте for цикл, чтобы поместить значения от 1 до 5 в myArray.


// ------------------------ Answer  --------------------

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++){
  myArray.push(i);
}


// ------------------------assignments------------------

// 16) Вставьте нечетные числа от 1 до 9 в myArrayцикл for.

// ------------------------ Answer  --------------------

// Setup
const myArray = [];

// Only change code below this line

for(let i = 1; i < 10; i += 2){
  myArray.push(i);
}


// ------------------------assignments------------------


// 17) Вставьте нечетные числа от 9 до 1 в myArray цикл for.


// ------------------------ Answer  --------------------

// Setup
const myArray = [];

// Only change code below this line

for(let i = 9; i >= 1; i -= 2){
  myArray.push(i);
}



// ------------------------assignments------------------


// 18) Объявите и инициализируйте переменную total в 0. Используйте for цикл, чтобы    добавить значение каждого элемента myArr массива в total.


// ------------------------ Answer  --------------------

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;

for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
}


// ------------------------assignments------------------


// 19) Измените функцию multiplyAll так, чтобы она возвращала
// произведение всех чисел в подмассивах arr.



// ------------------------ Answer  --------------------


function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// ------------------------assignments------------------


// 20) Измените while цикл в коде на do...while цикл, чтобы цикл подталкивал только число 10к myArray, и i он будет равен тому, 11 когда ваш код завершит работу.


// ------------------------ Answer  --------------------


// Setup
const myArray = [];
let i = 10;

// Only change code below this line
 do {
  myArray.push(i);
  i++;
} while (i < 10);


// ------------------------assignments------------------

// 21) Напишите рекурсивную функцию, sum(arr, n) которая возвращает сумму
//     первых n элементов массива arr.


// ------------------------ Answer  --------------------

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}


// ------------------------assignments------------------


// 22) У нас есть массив объектов, представляющих разных людей в наших списках контактов.

// Функция lookUpProfile, которая принимает name и свойство (prop) в качестве аргументов, была предварительно написана для вас.

// Функция должна проверять, name является ли контакт реальным firstName и данное свойство (prop) является свойством этого контакта.

// Если оба верны, верните «значение» этого свойства.

// Если name не соответствует ни одному контакту, то вернуть строку No such contact.

// Если prop не соответствует ни одному допустимому свойству контакта, найденному совпадающим, name верните строку No such property.


// ------------------------ Answer  --------------------


// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++){
  if(contacts[i].firstName === name) {
    if(contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");



// ------------------------assignments------------------

// 23) Измените randomFraction, чтобы возвращать случайное число вместо возврата 0.

// ------------------------ Answer  --------------------

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// ------------------------assignments------------------

// Замечательно, что мы можем генерировать случайные десятичные числа, но еще полезнее использовать его для генерации случайных целых чисел.

// Используйте Math.random()для генерации случайного десятичного числа.
// Умножьте это случайное десятичное число на 20.
// Используйте другую функцию, Math.floor() чтобы округлить число до ближайшего целого числа.
// Помните, что Math.random() никогда не может быть полностью возвращено  1, поскольку мы округляем в меньшую сторону, на самом деле невозможно получить 20. Этот метод даст нам целое число между 0 и 19.

// Собрав все вместе, вот как выглядит наш код:

Math.floor(Math.random() * 20);

// Мы вызываем Math.random(), умножаем результат на 20, затем передаем значение Math.floor() функции для округления значения до ближайшего целого числа.


// 24) Используйте этот метод, чтобы генерировать и возвращать случайное целое число между 0 и 9.

// ------------------------ Answer  --------------------

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}


// ------------------------assignments------------------

// Вместо генерации случайного целого числа между нулем и заданным числом, как мы делали раньше, мы можем сгенерировать случайное целое число, которое попадает в диапазон двух конкретных чисел.

// Для этого мы определим минимальное число minи максимальное число max.

// Вот формула, которую мы будем использовать. Найдите минутку, чтобы прочитать его и попытаться понять, что делает этот код:

Math.floor(Math.random() * (max - min + 1)) + min

// 24) Создайте вызываемую функцию randomRange, которая принимает диапазон myMinи myMaxвозвращает случайное целое число,
// большее или равное myMin, и меньшее или равное myMax, включительно.

// ------------------------ Answer  --------------------

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// ------------------------assignments------------------

// 25) Функция parseInt() анализирует строку и возвращает целое число. Вот пример:

// const a = parseInt("007");
// Приведенная выше функция преобразует строку 007в целое число 7. Если первый символ в строке не может быть преобразован в число, возвращается NaN.

// Используйте parseInt() в convertToIntegerфункции, чтобы она преобразовывала входную строку str в целое число и возвращала ее.


// ------------------------ Answer  --------------------

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// ------------------------assignments------------------

// Функция parseInt() анализирует строку и возвращает целое число. Он принимает второй аргумент для системы счисления, который указывает основание числа в строке.

// Основание может быть целым числом от 2 до 36.

// Вызов функции выглядит так:

// parseInt(string, radix);

// И вот пример:

// const a = parseInt("11", 2);

// Переменная системы счисления говорит, что 11 она находится в двоичной системе или с основанием 2.

// В этом примере строка преобразуется 11 в целое число 3.

// Используйте parseInt() в convertToInteger функции, чтобы она преобразовывала двоичное число в целое и возвращала его.


// 26) Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала двоичное число в целое и возвращала его.

// ------------------------ Answer  --------------------

function convertToInteger(str) {
  return parseInt(str, 2);
  }


  // ------------------------assignments------------------


  // convertToInteger("10011");

  // Условный оператор , также называемый тернарным оператором , может использоваться как однострочное выражение if-else.

  // Синтаксис таков: a ? b : c где a — условие, b — код, выполняемый при возврате условия true, и c — код, выполняемый при возврате условия false.

  // Следующая функция использует if/else оператор для проверки условия:

  // function findGreater(a, b) {
  //   if(a > b) {
  //     return "a is greater";
  //   }
  //   else {
  //     return "b is greater or equal";
  //   }
  // }
  // Это можно переписать с помощью условного оператора:

  // function findGreater(a, b) {
  //   return a > b ? "a is greater" : "b is greater or equal";
  // }



  // 27) Используйте условный оператор в checkEqual функции, чтобы проверить, равны ли два числа или нет.
  // Функция должна возвращать либо строку Equal, либо строку Not Equal.



// ------------------------ Answer  --------------------

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
 }

 checkEqual(1, 2);


   // ------------------------assignments------------------


// В предыдущей задаче вы использовали один условный оператор. Вы также можете связать их вместе, чтобы проверить несколько условий.

// Следующая функция использует операторы if, else if и else для проверки нескольких условий:

// function findGreaterOrEqual(a, b) {
//   if (a === b) {
//     return "a and b are equal";
//   }
//   else if (a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// Приведенную выше функцию можно переписать, используя несколько условных операторов:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal"
//     : (a > b) ? "a is greater"
//     : "b is greater";
// }
// Рекомендуется форматировать несколько условных операторов таким образом, чтобы каждое условие находилось в отдельной строке, как показано выше. Использование нескольких условных операторов без надлежащего отступа может затруднить чтение кода.
// Например:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
// }



// 28) В checkSign функции используйте несколько условных операторов — в соответствии с рекомендуемым форматом, используемым в findGreaterOrEqual — чтобы проверить, является ли число
// положительным, отрицательным или нулем.
// Функция должна вернуть positive, negative или zero.


// ------------------------ Answer  --------------------


function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);


  // ------------------------assignments------------------


//   В предыдущем задании вы узнали, как использовать рекурсию для замены for цикла. Теперь давайте рассмотрим более сложную функцию, которая возвращает массив последовательных целых чисел, начиная с 1 числа, переданного в функцию.

// Как упоминалось в предыдущем задании, будет базовый вариант . Базовый случай сообщает рекурсивной функции, когда ей больше не нужно вызывать себя. Это простой случай, когда возвращаемое значение уже известно. Также будет рекурсивный вызов , который выполняет исходную функцию с другими аргументами. Если функция написана правильно, в конечном итоге будет достигнут базовый случай.

// Например, предположим, что вы хотите написать рекурсивную функцию, которая возвращает массив, содержащий числа 1 до n. Эта функция должна будет принимать аргумент n, представляющий конечное число. Затем ему нужно будет вызывать себя с постепенно меньшими значениями, nпока не будет достигнуто 1. Вы можете написать функцию следующим образом:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
Значение [1, 2, 3, 4, 5] будет отображаться в консоли.

// Сначала это кажется нелогичным, поскольку значение n уменьшается , но значения в конечном массиве увеличиваются . Это происходит потому, что нажатие происходит последним, после возврата рекурсивного вызова. В точке, где nвталкивается в массив, countup(n - 1) уже было вычислено и возвращено [1, 2, ..., n - 1].

// Мы определили функцию, вызываемую countdownс одним параметром (n). Функция должна использовать рекурсию для возврата массива, содержащего целые числа , n на 1 основе n параметра. Если функция вызывается с числом меньше 1, функция должна вернуть пустой массив. Например, вызов этой функции n = 5 должен вернуть массив [5, 4, 3, 2, 1]. Ваша функция должна использовать рекурсию, вызывая саму себя, и не должна использовать циклы любого вида.



// ------------------------ Answer  --------------------


function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
 }


  // ------------------------assignments------------------


  Продолжая предыдущую задачу, мы предоставляем вам еще одну возможность создать рекурсивную функцию для решения проблемы.

  Мы определили функцию с именем rangeOfNumbers с двумя параметрами.
  Функция должна возвращать массив целых чисел, который начинается с числа, представленного startNum параметром, и заканчивается числом,
  представленным endNum параметром. Начальное число всегда будет меньше или равно конечному числу. Ваша функция должна использовать рекурсию,
  вызывая саму себя, и не использовать циклы любого рода. Это также должно работать для случаев, когда оба startNum и endNum одинаковы.


  // ------------------------ Answer  --------------------



  function rangeOfNumbers(startNum, endNum) {
    return startNum <= endNum ? [startNum].concat(rangeOfNumbers(startNum + 1, endNum)) : [];
    }