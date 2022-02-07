import VueRouter from 'vue-router'
import About from "../components/About.vue"
import Semi from "../components/Semi.vue"
import Soc from "../components/Soc.vue"
import Table from "../components/Table.vue"
import NavBar from "../components/NavBar.vue"
import Logo from "../components/Logo.vue"
import Footer from "../components/Footer.vue"
import Vue from 'vue'
import SBlock from "../components/SemiBlock.vue"
import Head from "../components/Head.vue"
import HBlock from "../components/HeadBlock.vue"
import tBlock from "../components/TableBlock.vue"
import TInfo from "../components/TableInfo.vue"
import TInfoBl from "../components/TableInfoBlock.vue"
import Sidenav from "../components/Sidenav.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/semi',
            name: 'semi',
            component: Semi
        },
        {
            path: '/table',
            name: 'tble',
            component: Table
        },
        {
            path: '/logo/:id',
            name: 'logo',
            component: Logo
        },
        {
            path: '/soc',
            name: 'soc',
            component: Soc
        },
        {
            path: '/block',
            name: 'block',
            component: SBlock
        },
        {
            path: '/head',
            name: 'head',
            component: Head
        },
        {
            path: '/hblock',
            name: 'hblock',
            component: HBlock,
            props: true
        },
        {
            path: '/tblock',
            name: 'tblock',
            component: tBlock,
            props: true
        },
        {
            path: '/tinfo',
            name: 'tinfo',
            component: TInfo,
            props: true
        },
        {
            path: '/tinfobl',
            name: 'tinfobl',
            component: TInfoBl,
            props: true
        },

    ],
})