import { VueElement } from "vue";

export default {
    props: ['movie'],
    methods:
    {
        isView(bool){
            this.movie.isView = bool
            this.$emit("isView",this.movie) 
        }
    },
    computed: {
        truncatedDescription() {
            return this.movie.description.substring(0, 20) + '...';
        }
    },

    template: `
    <div class="card" style="width: 18rem;">
        <img :src="movie.image" class="card-img-top" alt="Image du film">
        <div class="card-body">
            <h5 :style='[this.movie.isView ? {color:"green"} : {color:"black"}]' class="card-title">{{ movie.titre }}</h5>
            <button @click="isView(true)" v-if="!this.movie.isView">Non vu</button>
            <button @click="isView(false)" v-else>Vu</button>
            <p class="card-text">{{ truncatedDescription }}</p>
        </div>
    </div>
`
}
