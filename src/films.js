// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  //mapeamos el array movies para generar array directors que contenga solo el parametro
  //directors de cada movie(elemento del array movies)
  let directors =  movies.map(movie =>{return movie.director;});
  console.log(`EXERCICE 1 -> ${directors}` );
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  //para encontrar todos los objetos que cumplen condicion especifica en el array
  //usamos metodo filter(). La funcion es llamada para cada objeto del array movies.
  //nos devuelve un nuevo array.
  let moviesFromDirector = movies.filter(movie => movie.director === director);
  return moviesFromDirector;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
