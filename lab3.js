const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];

// 1
let first00sMovie = movies.find(movie => movie.year > 2000);
console.log(first00sMovie);

// 2
let nineRated = movies.find(movie => movie.rating > 9);
console.log(nineRated);

// 3
let nolanMovies = movies.filter(movie => movie.director === "Christopher Nolan");
console.log(nolanMovies);

// 4
let before10sMovie = movies.filter(movie => movie.year < 2010);
console.log(before10sMovie);

// 5
let movieTitles = movies.map(movie => movie.title);
console.log(movieTitles);

// 6
let movieRatings = movies.map(movie => movie.rating);
let avgRating = movieRatings.reduce((acc, curr) => acc + curr, 0) / movieRatings.length;
console.log(avgRating);

// 7
let sortedByYear = movies.map(movie => movie.year).sort((a, b) => a - b);
console.log(sortedByYear);

// 8
let sortedByRating = movies.map(movie => movie.rating).sort((a, b) => b - a);
console.log(sortedByRating);

// 9
let isAll8plus = movies.every(movie => movie.rating > 8);
console.log(isAll8plus);

// 10
let is90sMovie = movies.some(movie => movie.year === 1999);
console.log(is90sMovie);

// 11
let isAllOneDirector = new Set(movies.map(movie => movie.director)).size === 1;
console.log(isAllOneDirector);

// 12
let rateless85 = movies.some(movie => movie.rating < 8.5);
console.log(rateless85);