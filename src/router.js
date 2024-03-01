import {createRouter, createWebHashHistory} from "vue-router"

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
        component: () => import('./views/IndexView.vue'),
    }, {
        path: '/search',
        name: 'search',
        component: () => import('./views/SearchView.vue'),
    }, {
        path: '/versions',
        name: 'versions',
        component: () => import('./views/VersionsView.vue')
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