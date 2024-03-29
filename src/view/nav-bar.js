export default {
    props: ['links'],
    methods:{
        change(link){
            this.$emit('change-label', link.label)
        }
    },
    template: `
        <ul class="navbar-nav">
            <li class="nav-item active mr-5 ml-3">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item active mr-3" v-for="link in links">
                <router-link :to="link.url">{{ link.label }}</router-link>
            </li>
        </ul>
    `
}