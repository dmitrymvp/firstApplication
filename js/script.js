'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '50');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


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
 
console.log(personalMovieDB);
