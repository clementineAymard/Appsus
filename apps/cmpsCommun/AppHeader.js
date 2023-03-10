import MiniMenu from './MiniMenu.js'
export default {
    props: ['logo'],
    template: `
        <header  class="header ">
            <div class="logo flex align-center">
                <img :src="logo.iconUrl">
                <span>{{logo.name}}</span>
            </div>

            <div class="input">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <input type="text" placeholder="Search" v-model="keyword" @change="searchVal">
            </div>

            <div class="action-buttons flex align-center">
                <RouterLink to="/">
                    <img src="../assets/imgs/home.png">
                </RouterLink>
                <button @click="toggleMiniMenu">
                    <img src="../assets/imgs/menu.png">
                </button>
            </div>

            <MiniMenu v-if="isMiniMenuOpen"/>
        </header>
    `,
    data() {
        return {
            keyword: '',
            isMiniMenuOpen: false,
        }
    },
    methods: {
        searchVal() {
            console.log(this.keyword) // connected
        },
        toggleMiniMenu() {
            this.isMiniMenuOpen = !this.isMiniMenuOpen
        }
    },
    computed: {},
    // created(){},
    // etc.
    components:{
        MiniMenu,
    },
}