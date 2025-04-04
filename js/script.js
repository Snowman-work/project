"use strict" //говорим коду что работаем в новом стандарте JS, и неточности из старого формата JS не будут поддерживаться
// console.log(1)

// //Переменные
// //имя переменной может состоять из букв, цифр, символов доллара и нижнего подчеркивания
// //никогда не должно начинаться с цифры
// //Названия переменных не должны повторять зарезервированные слова в языке, prompt, alert и так далее.
// //Прямых констант в JS не бывает, (вероятно это связано с отсутствием статической типизации)
// let number = 5; //let обозначает что информация в переменной изменяемая.
// var alex = 'alex'; //устаревший способ обозначения переменной
// const letBorderWith = 1; //const обозначает что значение переменнйо мы поменять не можем, как задали так и остается.

// number = 10;
// console.log(number)

//Разница между массивом и объектом

// const arr = [1, 2, 3]; //массивы это перечень информации по порядку. Упорядоченность данных в массиве - это главное отличие.
// const arrObj = {
//     0: 1,
//     1: 2,
//     2: 3
// }
// console.log(arr[1]); //получаем второй элемент массива по порядку

// let category = 'toys';
// // console.log('https://someurl/' + category);

// console.log(`https://someurl/${category}/specialtoys/dolls/Alexia`);

//Веб приложение по учету прсомотренных фильмов пользователя

const numberOfFilms = window.prompt('Как много фильмов вы посмотрели?', ''); //создаем переменную и в ней вопрос к юзеру и ответ от него.

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actros: {},
    genres: [],
    privat: false
};

// const a = window.prompt('Последний просмотренный фильм?', ''),
//       b = window.prompt('Насколько оцениваете его?', ''),
//       c = window.prompt('Последний просмотренный фильм?', ''),
//       d = window.prompt('Насколько оцениваете его?', '');

// personalMovieDB.movies[a] = b;  //тут мы в объекте movies создаем свойство с ключом a и присваевыем ему значение b  
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// for(let i = 0; i < 2; i++){
//     const a = window.prompt('Последний просмотренный фильм?', ''),
//       b = window.prompt('Насколько оцениваете его?', '');
//       if(a != null && b != null && a != '' && b != '' && a.length < 55){
//         personalMovieDB.movies[a] = b;  //тут мы в объекте movies создаем свойство с ключом a и присваевыем ему значение b
//         console.log('good')
//       } else {
//         console.log('error');
//         i--;
//       }
// }
// if (personalMovieDB.count < 10){
//     console.log('Маловато ты смотрел')
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Норм ты смотрел')
// } else if (personalMovieDB.count > 30){
//     console.log('Задр')
// } else {
//     console.log('ощибка')
// }
// console.log(personalMovieDB);

// let i = 0;
// while ( i < 2){
//     const a = window.prompt('Последний просмотренный фильм?', ''),
//       b = window.prompt('Насколько оцениваете его?', '');
//       i++
//       if(a != null && b != null && a != '' && b != '' && a.length < 55){
//         personalMovieDB.movies[a] = b;  //тут мы в объекте movies создаем свойство с ключом a и присваевыем ему значение b
//         console.log('good')
//       } else {
//         console.log('error');
//         i--;
//       }
// }
// if (personalMovieDB.count < 10){
//         console.log('Маловато ты смотрел')
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log('Норм ты смотрел')
//     } else if (personalMovieDB.count > 30){
//         console.log('Задр')
//     } else {
//         console.log('ощибка')
//     }
//     console.log(personalMovieDB);

// let i = 0
// do{
//     const a = window.prompt('Последний просмотренный фильм?', ''),
//           b = window.prompt('Насколько оцениваете его?', '');
//           i++
//           if(a != null && b != null && a != '' && b != '' && a.length < 55){
//             personalMovieDB.movies[a] = b;  //тут мы в объекте movies создаем свойство с ключом a и присваевыем ему значение b
//             console.log('good')
//           } else {
//             console.log('error');
//             i--;
//           }
// }
// while(i < 2)
//     if (personalMovieDB.count < 10){
//                 console.log('Маловато ты смотрел')
//             } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//                 console.log('Норм ты смотрел')
//             } else if (personalMovieDB.count > 30){
//                 console.log('Задр')
//             } else {
//                 console.log('ощибка')
//             }
//             console.log(personalMovieDB);
//вложенный цикл for

// for(let i = 0; i <3; i++ ){
//     console.log(i);
//     for(let j = 0; j <3; j++ ){
//         console.log(j);
//     }
// }

//упражение елочка
// *
// **
// ***
// ****
// *****
// ******



// let result = ""; // изначально содержит пустую строку
// const length = 7; // установим максимальное количество рядов 
 
// for (let i = 1; i < length; i++) {
 
//     for (let j = 0; j < i; j++) { // запуск цикла в цикле
//         result += '*'; // каждый раз добавляем одну звёздочку в ряду
//     }
 
//     result += '\n'; // основной цикл добавляет каждый раз перенос строки 
// }
 
// console.log(result); // треугольник рисуем в консоли

//метки
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

//1 пример
// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }
// 1 пример
// let i = 5;
// while (i < 11) {
//     console.log(i);
//     i++;
// }

// // 2 пример
// for (let i = 20; i > 9; i--) {
//     if (i < 13){
//         break;
//     }
//     console.log(i);
// }

// //3 Пример
// for (i = 1; i < 11; i++) {
//     if ( i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// //4 пример
// let i = 2;
// while ( i < 16 ){
//     if (i % 2 === 0) {
//             i++;
//             continue;
//         }
//     console.log(i);
//     i++;
// }

// //5 пример
// let arr = [];
// for (let i = 0; i < 6; i++) {
//     arr[i] = i + 1; // Заполняем чем угодно
// }
// console.log(arr);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// // Пишем решение вот тут
// for (let i = 0; i < data.length; i++){
//     if (typeof(data[i]) === 'string'){
//         data[i] = data[i] + ' done';
//     } else{
//         data[i] = data[i] * 2;
//     }
//     console.log(data[i]);
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     data.reverse();
//     for (i = 0; i < data.length; i++) {
//         result[i] = data[i];

//         console.log(result[i]);
//     }

// let result = ''; // Тут храним пирамидку
// let lines = 5; // Количество строк

// for (let i = 0; i < lines; i++) {
//     // Добавляем пробелы
//     for (let j = 0; j < lines - i - 1; j++) {
//         result += ' ';
//     }
//     // Добавляем звездочки
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     // Переход на новую строку
//     result += '\n';
// }

// console.log(result);

//ФУНКЦИИ

function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage('hello world!');