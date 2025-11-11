import { createMovieCard } from "./renderCard";
const moviesContainer = document.getElementById('movies-container');

//Definir la funcion que crea una tarjeta
/**
@param {object} movie - un objeto de pelicula del array tempData
@return {HTMLElement} Un elemento <article> con la info de la peli
*/


function renderAllMovies(moviesArray) {
    
    moviesContainer.innerHTML = '';

    const movieCards = moviesArray.map(createMovieCard);

    moviesContainer.append(...movieCards);

}

const API_URL = "https://students-api.up.railway.app/movies"

$.get(API_URL, function(data) {
    console.log("Datos recibidos de la API:",data);
    renderAllMovies(data);
})
.fail(function() {
    console.error("Error: no se pudieron cargar las peliculas");
    moviesContainer.innerHTML = "<p>Hubo un error al cargar las películas. Intenta de nuevo más tarde.</p>";
})
