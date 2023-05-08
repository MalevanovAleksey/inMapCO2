import { createRouter, createWebHashHistory } from "vue-router";
import WelcomePage from "../components/Section/WelcomePage.vue";
import AboutPage from "../components/Section/AboutPage.vue";
import LayoutPage from "../components/LayoutPage.vue";

const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        component: WelcomePage
    },
    {
        path: '/map',
        component: LayoutPage
    },
    {
        path: '/about',
        component: AboutPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router