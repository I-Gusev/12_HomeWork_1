const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов", ""),
      score1 = prompt("на сколько оцениваете его", ""),
      lastFilm2 = prompt("Один из последних просмотренных фильмов", ""),
      score2 = prompt("на сколько оцениваете его", "");

personalMovieDB.movies[lastFilm1] = score1;
personalMovieDB.movies[lastFilm2] = score2;
console.log(personalMovieDB);