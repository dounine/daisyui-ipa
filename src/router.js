import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: () => {
            return "/index";
        },
    },
    {
        path: "/index",
        name: "index",
        component: () => import("./views/Index.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./views/Login.vue"),
    },
    {
        path: "/search",
        name: "search",
        component: () => import("./views/Search.vue"),
    },
    {
        path: "/:appid/version",
        name: "version",
        component: () => import("./views/Version.vue"),
        children: [
            {
                path: ':version/dump',
                name: 'version_dump',
                component: () => import('./views/dump/Dump.vue')
            },
            {
                path: ':version/download',
                name: 'version_download',
                component: () => import('./views/dump/Download.vue')
            }
        ]
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("./views/Profile.vue"),
    },
    {
        path: "/payment",
        name: "payment",
        component: () => import("./views/Payment.vue"),
    }, {
        path: '/balance',
        name: 'balance',
        component: () => import('./views/Balance.vue'),
    }, {
        path: "/coin_detail",
        name: "coin_detail",
        component: () => import("./views/CoinDetail.vue"),
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("./views/NotFound.vue"),
    },
];
const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
