export default {
    props: ['links'],
    methods:{
        change(link){
            this.$emit('change-label', link.label)
        }
    },
    template: `
        <ul class="navbar-nav">
            <li class="nav-item active mr-3" v-for="link in links">
                <a v-on:click="change(link)" class="nav-link" :href="link.url">{{ link.label }}</a>
            </li>
        </ul>
    `
}