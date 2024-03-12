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
        component: () => import('./views/Index.vue'),
    }, {
        path: '/login',
        name: 'login',
        component: () => import('./views/Login.vue'),
    }, {
        path: '/search',
        name: 'search',
        component: () => import('./views/Search.vue'),
    }, {
        path: '/versions',
        name: 'versions',
        component: () => import('./views/Versions.vue')
    }, {
        path: '/profile',
        name: 'profile',
        component: () => import('./views/Profile.vue')
    }, {
        path: '/payment',
        name: 'payment',
        component: () => import('./views/Payment.vue')
    }, {
        path: '/:catchAll(.*)',
        component: () => import('./views/NotFound.vue')
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router