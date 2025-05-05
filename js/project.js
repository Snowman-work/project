//Веб приложение по учету прсомотренных фильмов пользователя

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Как много фильмов вы посмотрели?', ''); //создаем переменную и в ней вопрос к юзеру и ответ от него.
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actros: {},
    genres: [],
    privat: false
};

const a = window.prompt('Последний просмотренный фильм?', ''),
      b = window.prompt('Насколько оцениваете его?', ''),
      c = window.prompt('Последний просмотренный фильм?', ''),
      d = window.prompt('Насколько оцениваете его?', '');

personalMovieDB.movies[a] = b;  //тут мы в объекте movies создаем свойство с ключом a и присваевыем ему значение b  
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

for(let i = 0; i < 2; i++){
    const a = window.prompt('Последний просмотренный фильм?', ''),
      b = window.prompt('Насколько оцениваете его?', '');
      if(a != null && b != null && a != '' && b != '' && a.length < 55){
        personalMovieDB.movies[a] = b;  //тут мы в объекте movies создаем свойство с ключом a и присваевыем ему значение b
        console.log('good')
      } else {
        console.log('error');
        i--;
      }
}
if (personalMovieDB.count < 10){
    console.log('Маловато ты смотрел')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Норм ты смотрел')
} else if (personalMovieDB.count > 30){
    console.log('Задр')
} else {
    console.log('ощибка')
}
console.log(personalMovieDB);

let i = 0;
while ( i < 2){
    const a = window.prompt('Последний просмотренный фильм?', ''),
      b = window.prompt('Насколько оцениваете его?', '');
      i++
      if(a != null && b != null && a != '' && b != '' && a.length < 55){
        personalMovieDB.movies[a] = b;  //тут мы в объекте movies создаем свойство с ключом a и присваевыем ему значение b
        console.log('good')
      } else {
        console.log('error');
        i--;
      }
}
if (personalMovieDB.count < 10){
        console.log('Маловато ты смотрел')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Норм ты смотрел')
    } else if (personalMovieDB.count > 30){
        console.log('Задр')
    } else {
        console.log('ощибка')
    }
    console.log(personalMovieDB);

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