
const moviesContainer = document.getElementById('movies-container');

//Definir la funcion que crea una tarjeta
/**
@param {object} movie - un objeto de pelicula del array tempData
@return {HTMLElement} Un elemento <article> con la info de la peli
*/

function createMovieCard(movie) {

    const card = document.createElement('article');
    card.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = `Póster de ${movie.title}`;

    const info = document.createElement('div');
    info.classList.add('movie-info');

    const title = document.createElement('h3');
    title.textContent = movie.title;

    const director = document.createElement('p');
    director.textContent = `Director: ${movie.director}`;

    const year = document.createElement('p');
    year.textContent = `Año: ${movie.year}`;

    const duration = document.createElement('p');
    duration.textContent = `Duracion: ${movie.duration}`;

    const genres = document.createElement('p');
    genres.textContent = `Genero: ${movie.genre.join(', ')}`;

    const rate = document.createElement('p');
    rate.textContent = `Calificacion: ${movie.rate} ⭐`;

    info.appendChild(title);
    info.appendChild(director);
    info.appendChild(year);
    info.appendChild(duration);
    info.appendChild(genres);
    info.appendChild(rate);

    card.appendChild(img);
    card.appendChild(info);

    return card;
    
}
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
