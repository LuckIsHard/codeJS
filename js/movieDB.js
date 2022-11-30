"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    lastMovie = prompt('Назовите последний фильм, что вы смотрели', ''),
    lastMovieEstimation = +prompt('Оцените его', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
personalMovieDB.movies[lastMovie] = lastMovieEstimation;

console.log(personalMovieDB);




