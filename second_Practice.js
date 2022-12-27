// --------------------------------assignments-------------

// 1) Создайте объект, представляющий вызываемую собаку, myDog который содержит свойства name (строку) legs, tails и friends.

// Вы можете установить для этих свойств объекта любые значения, которые вы хотите, если name это строка,

// числа и legs массив .tails friends

// ----  -- - -- Answer  - -- --------

// const myDog = {
//   // Only change code below this line
// "name": "Friend",
// "legs": 4,
// "tails": 1,
// "friends": ["Mouse", "Cat"]

//   // Only change code above this line
// };

// --------------------------------assignments-------------

// 2) Считайте значения свойств с testObj c помощью записи через точку.
// Установите переменную hatValue равной свойству объекта hat и установите
// переменную shirtValue равной свойству объекта shirt.

// ----  -- - -- Answer  - -- --------

// // Setup
// const testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };

// 3) Only change code below this line
// const hatValue = testObj.hat;      // Change this line
// const shirtValue = testObj.shirt;    // Change this line

// --------------------------------assignments-------------

// Прочитайте значения свойств an entreeи the drink
// использования testObjс кобочной нотации и присвойте
// их соответственно entreeValueи drinkValue.

// ----  -- - -- Answer  - -- --------

// Setup
// const testObj = {
//   'an entree': 'hamburger',
//   'my side': 'veggies',
//   'the drink': 'water',
// };
// // Only change code below this line
// const entreeValue = testObj['an entree']; // Change this line
// const drinkValue = testObj['the drink']; // Change this line

// ------------------------assignments------------------

// 4) Установите playerNumber переменную в 16. Затем используйте переменную,
//    чтобы найти имя игрока и присвоить его player.

// ------------------------ Answer  --------------------

// Setup
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line
// const playerNumber = 16;  // Change this line
// const player = testObj[playerNumber];   // Change this line

// ------------------------assignments------------------

// 5) Обновите myDogсвойство имени объекта. Давайте изменим ее имя с Coderна Happy Coder.
//    Вы можете использовать либо точку, либо квадратную нотацию.

// ------------------------ Answer  --------------------

// Setup
// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// Only change code below this line
// myDog["name"] = "Happy Coder";

// ------------------------assignments------------------

// 6) Добавьте bark свойство myDog и задайте для него звук собаки, например "woof".
//  Вы можете использовать либо точку, либо квадратную нотацию.

// ------------------------ Answer  --------------------

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// myDog["bark"] = "woof";

// ------------------------assignments------------------

// 7) Удалить tails свойство из myDog. Вы можете использовать либо точку, либо квадратную нотацию.

// ------------------------ Answer  --------------------

// Setup
// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };

// Only change code below this line

// delete myDog["tails"];

// ------------------------assignments------------------

// 8) Преобразуйте оператор switch в объект с именем lookup. Используйте его,

// чтобы найти val и присвоить связанную строку result переменной.

// ------------------------ Answer  --------------------

// Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   const lookup = {
//      "alpha": "Adams",
//      "bravo": "Boston",
//      "charlie": "Chicago",
//      "delta": "Denver",
//      "echo": "Easy",
//      "foxtrot": "Frank"
//   }
//    result = lookup[val];
//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");
