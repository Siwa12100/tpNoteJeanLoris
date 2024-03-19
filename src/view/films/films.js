export default {
    data() {
        return {
            movies: [],
            filteredMovies: [],
            headMovies: []
        };
    },


    methods: {
        isView(movie) {
            this.movies.find((e) => e.id === movie.id).isView = movie.isView;
            localStorage.setItem('films', JSON.stringify(this.movies));
        },
        filterMovies(match)
        {
            this.filteredMovies = this.movies.filter((movie) => movie.titre.toLowerCase().includes(match.toLowerCase()))
        }
    },


    async mounted() {
        let storedFilms = localStorage.getItem('films');

        if (storedFilms) {
            this.movies = JSON.parse(storedFilms);
            this.filteredMovies = this.movies

        } else {

            fetch('/src/stubs/stubMovie.json')
                .then(response => response.json())
                .then(data => {

                    this.movies = data;
                    localStorage.setItem('films', JSON.stringify(data));
                });
        }
        let resp = []
        await service.getData('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
        .then(res => {
            console.log(res);
            const newMovies = res.map(elem => new Movie(Date.now(), elem.Title, "Un super film à voir quoi", elem.Poster));
            newMovies.forEach(movie => {
                this.movies.unshift(movie);
            });
            console.log(this.movies);
        });
    },


    template: `
</div>
        <search-bar @input-filter="filterMovies"></search-bar>
        <div class="container">
            <div class="row">
                <movie-card 
                    v-for="movie in filteredMovies" 
                    :key="movie.id" 
                    :movie="movie"
                    @is-view="isView"
                    class="col-sm-4 mb-4">
                </movie-card>

            </div>
        </div>
    `
};


