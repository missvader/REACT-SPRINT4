const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  //mapeamos el array movies para generar array directors que contenga solo el parametro
  //directors de cada movie(elemento del array movies)
  let directors =  movies.map(movie =>{return movie.director;});
  //console.log(`EXERCICE 1 -> ${directors}` );
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
function moviesAverageOfDirector(moviesFromDirector, director) {
  //primero buscamos la suma score total del director, usando metodo reduce()
  //se ejecuta funcion reductora sobre cada elemento del array, devolviendo como resultado
  //un unico valor(va sumando). El callback de la funcion(lo que ejecuta sobre cada elemento
  //del array) recibe como parametros: total como acumulador, poniendo 0 como parametro
  //le decimos que el valor inicial equivale a 0, y movie es el valor actual .
  //Anexo: el test incluye una pelicula de Kubrik al hacer test con Tarantino ?????????
  //?????????????
  //Solucion=> asegurar que coincide director para sumar solo sus scores en el reduce y
  //al calcular la longitud array para hacer la media, hacer de nuevo un filter que filtre
  //por director

    let scoreDirector = moviesFromDirector.reduce((total, movie) => {
      if(movie.director === director){
        total += movie.score;
      }
      return total;
    },0)

  //calculamos media. 
  moviesFromDirector = moviesFromDirector.filter(movie => movie.director === director);
  let average = scoreDirector / moviesFromDirector.length;
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  //mapeo array movies para crear array nuevo con los titulos de las peliculas
  let moviesTitle = movies.map(movie =>{
    return movie.title
    //console.log(moviesTitle);
  });
  //ordeno alfabeticamente las peliculas con el metodo sort()
  moviesTitle.sort();
  //tal y como pide el test, en el caso de que el array sea de mas de 20 peliculas, mostrar
  //solo las 20 primeras. Metodo slice() sirve para recortar
  if(moviesTitle.length >= 20){
    moviesTitle = moviesTitle.slice(0,20);
  }
  //verifico que el resultado sea igual al de array movies, las peliculas coinciden 
  moviesTitle.slice(0,20)=== movies.slice(0,20);
  return moviesTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  //mapeamos para crear nuevo array
  let moviesOrderByYear = movies.map( movie => {
    return movie;
  })
  //metodo sort() para ordenar. Recibe funci??n callback de comparacion, que se ejecuta
  //con todos los elementos del array. Funci??n -> 2 par??metros, que toman los valores 
  //de los elementos que se estan comparando. 
  moviesOrderByYear.sort((movie1, movie2) => {
    if(movie1.year < movie2.year){
      return -1;  //orden ascendente, movie1 debe ir antes
    }
    if(movie1.year > movie2.year){
      return 1;   //debe ir despu??s
    }
    if(movie1.title.toLowerCase() < movie2.title.toLowerCase()){
      return -1;  //si movie.year no cumple ninguna de las condic anteriores es que 
                  //son iguales. Pasamos a comparar movie.title para ordenar alfab.
                  //pasamos toLowerCase() para que no diferencie al hacer comparacion
    }
    if(movie1.title.toLowerCase() > movie2.title.toLowerCase()){
      return 1;
    }
    return 0;
  });
  
  return moviesOrderByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  //filter() para obtener las movies por genero. Con includes() no tenemos en cuenta 
  //el resto de generos de una misma pelicula 
  let moviesCategory = movies.filter(movie => {
    if(movie.genre.includes(genre)){
      return movie
    }
  })
  //variable para filter las peliculas que no tienen score. Usamos el m??todo Number.isFinite() como condicion para filtar.
  //(solo los valores de tipo numerico son finitos)
  let moviesWithoutScore = moviesCategory.filter(movie => {
    if(!Number.isFinite(movie.score)){
      return movie;
    }
  })
  let moviesLength = moviesCategory.length - moviesWithoutScore.length;
  
  
  //reduce() para la suma score de la categoria 
  let scoreCategory = moviesCategory.reduce((movie1, movie2) => movie1.score + movie2.score);
  
  let averageCategory = scoreCategory / moviesLength;
  return averageCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  //El metodo JSON.parse analiza una cadena de texto como JSON 
  //JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, de esta manera podremos manipular 
  //la duracion de las peliculas y acceder a cada uno de los car??cteres de la cadena 
  let moviesToMinutes = JSON.parse(JSON.stringify(movies));
  //creo variables. uso toString() para pasar el parametro a string para asi poder usar metodo split()
  //metodo split() El m??todo split() divide (fragmenta) un string en sub cadenas usando un separador (divisor), que aqu?? seran las letras 
  //h y m. El segundo parametro (limite) limita el numero de divisiones
  let hours= cadena => cadena.toString().split("h", 1);
  let minutes= cadena => cadena.toString().split(" ").pop().split("m",1); //split hasta espacio, elimino con pop() y split del resto
  //mapeamos para crear un nuevo array y a su vez indicamos condic para calcular horas y min (usando las variables que antes he creado
  //hours y minutes. Important! Volver a pasar la cadena a number con Number())
  moviesToMinutes.map(movie => {
    if(movie["duration"].includes("min")){
      movie["duration"] = 
      Number(hours(movie["duration"]))*60 + Number(minutes(movie["duration"]))
    }
    else{
      movie["duration"] = Number(hours(movie["duration"]))*60;
    }
  })
 
  return moviesToMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  //filter() para crear array by year
  let bestFilm = movies.filter(movie => movie.year === year)
  //sort() para ordenar movies by score 
  bestFilm.sort((movie1, movie2) => movie2.score - movie1.score);
  //con Array.of() creamos nuevo array que contenga movie de mayor score
  let bestFilmOfYear = Array.of(bestFilm[0])
  console.log(bestFilmOfYear);
  return bestFilmOfYear;
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
