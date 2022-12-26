// const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//   count: numberofFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Сколько фильмов вы уже посмотрели?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Сколько фильмов вы уже посмотрели?', ''),
//   d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);

// console.log(25 || (null && !3));

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || (null && !3 && undefined) || 5);

// console.log((5 === 5 && 3 > 1) || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!');
// }

// let first = 10;
// for ( i = 5; i <= first; i++){
//   console.log(i);
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);
// return result;

// for ( let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//   result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; j < 3; j++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

// let num = 50;
// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// let num = 50;
// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);

// }

// const num = 50;

// switch (num) {
//   case 49:
//     console.log('Неверно');
//     break;
//   case 100:
//     console.log('Неверно');
//     break;
//   case 50:
//     console.log('В точку');
//     break;
//   default:
//     console.log('Не в этот раз');
//     break;
// }

// 'use strict';
// 1)
// const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberofFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один с последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

// 2)

// const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberofFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// let i = 0;

//   while (i < 2) {
//     console.log(i);
//     i++;
//   const a = prompt('Один с последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

// 3)

// const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberofFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// let i = 0;
// do {
//   i++;}
//   while (i > 2);
//   {
//   const a = prompt('Один с последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('Произошла ошибка');
// }
// console.log(personalMovieDB);

// -----------------------------------------------------//

// Функции

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// function calc(a, b) {
//   return (a + b);
// }

// function ret(){
//   let num = 50;

//   return num;

// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//   console.log("Hello");
// };

// logger();

// const calc = (a, b) => a + b;

// 26. Еще раз про аргументи функции

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//   console,log(28 * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// 27. Про важность Return ;

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//   for (let = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log('Done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }
// sayHello('Alex');

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(a) {
//   return [a - 1, a, a + 1 ];
// }
// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//   if (typeof(times) !== 'number' || times <= 0)
//   {
//     return num;
//   }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//       if (i === times){
//       str += `${num * i}`;
//       } else {
//       str += `${num * i}---`;
//       }
//     }
//   return str;
// }

// getMathResult(10, 5);

// Методы и свойства строк и чисел

// const str = "test";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// Поиск подстроки

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// let numberofFilms;

// function start() {
//   numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
//     numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberofFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilm(){

//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один с последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }
// rememberMyFilm();

// function detectPersonalLevel(){

//   if (personalMovieDB.count < 10) {
//     console.log('Просмотренно довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// detectPersonalLevel();

// Создать функцию showMyDB, которая будет проверять свойство privat. Если
// стоит в позиции false - выводит в консоль главный обьект программы

// function showMyDB (hidden) {
//   if (!hidden){
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записываеться в массобязательно */

// function writeYourGenres(){
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();
