export default {
    data(){
        return{
            input: null
        }
    },
    methods:{
        change(){
            console.log(input)
        }
    },
    watch:{
        input(){
            this.$emit("inputFilter", this.input)
            console.log(this.input)
        }
    },
    template: `
    <div class="input-group rounded">
        <input v-model="input" type="search" class="form-control rounded" placeholder="Search" />
    </div>
    `
}