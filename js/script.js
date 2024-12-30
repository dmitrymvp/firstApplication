const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



const firstWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
const  firstFilmRating = +prompt('На сколько оцените его?', '');
const secondWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
const  secondFilmRating = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstWatchedFilm] = firstFilmRating;
personalMovieDB.movies[secondWatchedFilm] = secondFilmRating;

console.log(personalMovieDB);
