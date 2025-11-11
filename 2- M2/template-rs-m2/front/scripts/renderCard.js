
export function createMovieCard(movie) {

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