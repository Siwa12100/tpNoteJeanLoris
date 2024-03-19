import MovieCard from './MovieCard.js';

export default {
    components: {
        MovieCard
    },
    data() {
        return {
            movies: [] 
        };
    },

    mounted() {
        let storedFilms = localStorage.getItem('films');
        if (storedFilms) {
            this.movies = JSON.parse(storedFilms);
        } else {
            fetch('/src/stubs/stubMovie.json') 
                .then(response => response.json())
                .then(data => {
                    this.movies = data;
                    localStorage.setItem('films', JSON.stringify(data)); // Initialise le localStorage
                });
        }
    }, 


    template: `
        <div class="container">
            <div class="row">
                <movie-card 
                    v-for="movie in movies" 
                    :key="movie.id" 
                    :movie="movie"
                    class="col-sm-4 mb-4">
                </movie-card>
            </div>
        </div>
    `
};
