export default {
    props: ['movie'],

    template: `
        <div class="card" style="width: 18rem;">
            <img :src="movie.image" class="card-img-top" alt="Image du film">
            <div class="card-body">
                <h5 class="card-title">{{ movie.titre }}</h5>
                <p class="card-text">{{ truncatedDescription }}</p>
            </div>
        </div>
    `,

    computed: {
        truncatedDescription() {
            return this.movie.description.substring(0, 20) + '...';
        }
    }
}
