export default {
    data() {
        
        return {
            id: '',
            titre: '',
            description: '',
            image: ''
        }
    },

    methods: {

        addFilm() {
            const newFilm = {
                id: Date.now(), // Simple générateur d'ID basé sur le timestamp actuel
                titre: this.titre,
                description: this.description,
                image: this.image
            };
            let films = JSON.parse(localStorage.getItem('films')) || [];
            films.push(newFilm);
            localStorage.setItem('films', JSON.stringify(films));
            this.$router.push('/films'); // Redirige l'utilisateur vers la liste des films
        }
    },

    template:`
        <div class="container">
            <h2>Ajouter un film</h2>
            <form @submit.prevent="addFilm">
                <div class="form-group">
                    <label for="titre">Titre</label>
                    <input type="text" v-model="titre" class="form-control" id="titre" required>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea v-model="description" class="form-control" id="description" required></textarea>
                </div>
                <div class="form-group">
                    <label for="image">Image URL</label>
                    <input type="text" v-model="image" class="form-control" id="image" required>
                </div>
                <button type="submit" class="btn btn-primary">Ajouter le film</button>
            </form>
        </div>
    `
}
