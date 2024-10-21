

const movieInfo = {
    inception: {
        title: 'Inception',
        description: 'Una película de ciencia ficción sobre los sueños.',
        duration: 'Duración: 148 minutos',
        time: 'Hora: 14:00, 18:00, 21:00',
        image: 'img/inception.jpg'
    },
    darkKnight: {
        title: 'The Dark Knight',
        description: 'Batman enfrenta a su mayor enemigo, el Joker.',
        duration: 'Duración: 152 minutos',
        time: 'Hora: 15:00, 19:00, 22:00',
        image: 'img/dark.jpg'
    },
    interstellar: {
        title: 'Interstellar',
        description: 'Un grupo de astronautas viaja a través de un agujero negro en busca de un nuevo hogar para la humanidad.',
        duration: 'Duración: 169 minutos',
        time: 'Hora: 16:00, 20:00, 23:00',
        image: 'img/interstellar.jpg'
    },
    matrix: {
        title: 'The Matrix',
        description: 'Un programador descubre la verdad sobre la realidad.',
        duration: 'Duración: 136 minutos',
        time: 'Hora: 13:00, 17:00, 20:00',
        image: 'img/matrix.jpg'
    },
    redemption: {
        title: 'The Shawshank Redemption',
        description: 'Un hombre condenado injustamente lucha por su libertad.',
        duration: 'Duración: 142 minutos',
        time: 'Hora: 12:00, 16:00, 19:00',
        image: 'img/redemption.jpg'
    },
    pulpFiction: {
        title: 'Pulp Fiction',
        description: 'Varias historias de crimen entrelazadas.',
        duration: 'Duración: 154 minutos',
        time: 'Hora: 13:00, 17:00, 21:00',
        image: 'img/pulp.jpg'
    }
};


const movieElements = document.querySelectorAll('.movie a');

movieElements.forEach(movieElement => {
    movieElement.addEventListener('click', function(event) {
        event.preventDefault(); 

        const movieId = this.href.split('#')[1];
        const movie = movieInfo[movieId];


        const movieDetails = document.createElement('div');
        movieDetails.innerHTML = `
        <div class="movie-info">
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <p>${movie.duration}</p>
            <p>${movie.time}</p>
        </div>
        <div class="seats-section">
            <h3>Selecciona tus asientos:</h3>
            <div class="seats">
                <div class="row">
                    <button class="seat">A1</button>
                    <button class="seat">A2</button>
                    <button class="seat">A3</button>
                </div>
                <div class="row">
                    <button class="seat">B1</button>
                    <button class="seat">B2</button>
                    <button class="seat">B3</button>
                </div>
            </div>
        </div>
    `;
    

    movieDetails.classList.add('movie-details');

        const movieSection = document.querySelector('.movies');
        movieSection.innerHTML = '';
        movieSection.appendChild(movieDetails);

        const seats = document.querySelectorAll('.seat');
        seats.forEach(seat => {
            seat.addEventListener('click', () => {
                seat.classList.toggle('selected');
            });
        });
    });
});
