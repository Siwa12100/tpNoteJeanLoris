export default {
    props: ['links'],
    template: `
        <ul class="navbar-nav">
            <li class="nav-item active mr-3" v-for="link in links">
                <span class="nav-link">{{ link.url }}</span>
            </li>
        </ul>
    `
}