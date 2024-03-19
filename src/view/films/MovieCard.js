import { VueElement } from "vue";

export default {
    props: ['movie'],
    data(){
        return {
            view : undefined,
        }
    },
    methods:
    {
        isView(){
            this.movie.isView = true
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
            <h5 :style='[this.movie.isView ? {color:"green"} : {color:"undefined"}]' class="card-title">{{ movie.titre }}</h5>
            <button @click="isView">{{movie.isView}}</button>
            <p class="card-text">{{ truncatedDescription }}</p>
        </div>
    </div>
`
}
