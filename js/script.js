'use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '50');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '50');
        }
    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', 'q').trim();
            let b = +prompt('На сколько оцените его?', '2');

            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b != NaN) {
                personalMovieDB.movies[a] = b;
                console.log('good');
            } else {
                i--;
                console.log('error')
            }
        }
    },
    detectPersonalLevel: () => {
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
    },
    toggleVisibleMyDB: () => {
        !personalMovieDB.privat ? personalMovieDB.privat = true : personalMovieDB.privat = false;
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {

        for (let i = 0; i < 1; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres !== null && genres !== '') {
            //     personalMovieDB.genres[i] = genres;
            // } else {
            //     i--;
            // }

            if (genres !== null && genres !== '') {
                personalMovieDB.genres = genres.split(', ')
                personalMovieDB.genres.sort();
            } else {
                i--;
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();


personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB()

personalMovieDB.showMyDB(personalMovieDB.privat);