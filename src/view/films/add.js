import { ValidationErreur } from '/src/erreurs/ValidationErreur.js';

export default {
    data() {
        return {
            id: '',
            titre: '',
            description: '',
            image: '',
            erreurs: {}
        }
    },
    methods: {
        validateField(field) {
            this.erreurs[field] = '';

            switch (field) {

                case 'titre':

                    if (this.titre.length < 5 || this.titre.length > 30) {
                        this.erreurs[field] = "Le titre doit contenir entre 5 et 30 caractères.";
                    }

                    break;

                case 'description':

                    if (this.description.length < 30) {

                        this.erreurs[field] = "La description doit contenir au moins 30 caractères.";
                    }
                    
                    break;
            }
        },

        validate() {
            
            this.validateField('titre');
            this.validateField('description');

            return Object.keys(this.erreurs).every(key => this.erreurs[key] === '');
        },


        addFilm() {

            if (!this.validate()) {

                return; 
            }

            const newFilm = {

                id: Date.now(),
                titre: this.titre,
                description: this.description,
                image: this.image,
                isView: false
            };

            let films = JSON.parse(localStorage.getItem('films')) || [];
            films.push(newFilm);
            localStorage.setItem('films', JSON.stringify(films));

            this.$router.push('/films');
        }
    },

    // ----> Observation dynamique pour les champs du formulaire...
    watch: {

        titre() {

            this.validateField('titre');
        },

        description() {
            this.validateField('description');
        },

        image() {
            this.validateField('image');
        },
    },

    template:`
        <div class="container">

            <h2>Ajouter un film</h2>

            <form @submit.prevent="addFilm">

                <div class="form-group">
                    <label for="titre">Titre</label>
                    <input type="text" v-model="titre" class="form-control" id="titre" :class="{'is-invalid': erreurs.titre}" required>
                    <div class="invalid-feedback">{{ erreurs.titre }}</div>
                </div>
                
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea v-model="description" class="form-control" id="description" :class="{'is-invalid': erreurs.description}" required></textarea>
                    <div class="invalid-feedback">{{ erreurs.description }}</div>
                </div>

                <div class="form-group">
                    <label for="image">Image URL</label>
                    <input type="text" v-model="image" class="form-control" id="image" required>
                </div>

                <button type="submit" class="btn btn-primary">Ajouter le film</button>
                
            </form>
        </div>`
        
};