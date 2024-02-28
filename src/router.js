import {createRouter, createWebHashHistory} from "vue-router"
import IndexView from "./views/IndexView.vue";
import SearchView from "./views/SearchView.vue";

const routes = [
    {
        path: '/',
        redirect: () => {
            return '/index'
        }
    },
    {
        path: '/index',
        name: 'index',
        component: IndexView,
    }, {
        path: '/search',
        name: 'search',
        component: SearchView,
    }, {
        path: '/:catchAll(.*)',
        component: () => import('./views/NotFoundView.vue')
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router