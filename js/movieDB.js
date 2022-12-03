"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i=0; i<2; i++){
    const a = prompt('Назовите последний фильм, что вы смотрели', ''),
        b = +prompt('Оцените его', '');
    if(a !='' && b != '' && a.length <= 50 && a != null && b != null) {
        personalMovieDB.movies[a] = b;
    }
    else {
        i-=1;
    }    
}

if (personalMovieDB.count < 10){
    alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ){
    alert('Вы класический зритель');
} else if (personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('Error');
}

console.log(personalMovieDB);




