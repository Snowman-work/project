//Веб приложение по учету прсомотренных фильмов пользователя

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Как много фильмов вы посмотрели?', ''); //создаем переменную и в ней вопрос к юзеру и ответ от него.

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Как много фильмов вы посмотрели?', '');
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actros: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}

// rememberMyFilms()

function detectPersonalLevel() {
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
}

// detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {  //функция которая выводит трижды вопрос вашего любимого жанра и записывает его в массив genres
    for(let i = 1; i <= 3; i++) { //делаем цикл чтобы трижды задавался вопрос
        const genre = prompt(`Ваш любимый жанр под номером ${i}`) //переменная genre в которую будет записываться ответ юзера
        personalMovieDB.genres[i - 1] = genre; //получаем доступ к элементу массива personalMovieDB начиная с 0 для корректного доступа к массиву и сохраняем в него значение из переменной genre
    }
}

writeYourGenres()