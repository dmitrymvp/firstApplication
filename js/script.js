'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '50');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '50');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', 'q');
        let b = +prompt('На сколько оцените его?', '2');

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b != NaN) {
            personalMovieDB.movies[a] = b;
            console.log('good');
        } else {
            i--;
            console.log('error')
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    switch (true) {
        case personalMovieDB.count < 10:
            console.log('Просмотренно довольно мало фильмов');
            break;
        case personalMovieDB.count >= 10 && personalMovieDB.count <= 30:
            console.log('Вы классический зритель');
            break;
        case personalMovieDB.count > 30:
            console.log('Вы киноман');
            break;
        default:
            console.log('Произошла ошибка');
            break;
    }
}

detectPersonalLevel();


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);