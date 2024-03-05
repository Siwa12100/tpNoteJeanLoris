export default {
    props: ['links'],
    template: `
        <ul class="navbar-nav">
            <li class="nav-item active mr-3" v-for="link in links">
                <a class="nav-link" :href="link.url">{{ link.label }}</a>
            </li>
        </ul>
    `
}