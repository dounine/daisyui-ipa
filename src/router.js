import {createRouter, createWebHashHistory} from "vue-router"
import HomeView from "../view/HomeView.vue"

const routes = [
    {
        path: '/',
        redirect: () => {
            return '/index'
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../view/admin/HomeView.vue'),
        children: [
            {
                path: 'site',
                name: 'adminSite',
                component: () => import('../view/admin/SiteView.vue')
            },
            {
                path: 'source',
                name: 'adminSource',
                component: () => import('../view/admin/SourceView.vue')
            },
            {
                path: 'source/edit/:index?',
                name: 'adminSourceEdit',
                component: () => import('../view/admin/source/SourceEditorView.vue')
            },
            {
                path: 'ipa',
                name: 'adminIpa',
                component: () => import('../view/admin/IpaView.vue')
            },
            {
                path: 'copyright',
                name: 'adminCopyright',
                component: () => import('../view/admin/CopyRightView.vue')
            },
            {
                path: 'file',
                name: 'adminFile',
                component: () => import('../view/admin/FileView.vue')
            },
            {
                path: 'storage',
                name: 'adminStorage',
                component: () => import('../view/admin/StorageView.vue')
            },
            {
                path: 'app',
                name: 'adminApp',
                component: () => import('../view/admin/AppView.vue')
            },
            {
                path: 'app/version/field/edit/:app/:version/:index?',
                name: 'adminAppVersionFieldEdit',
                component: () => import('../view/admin/app/AppVersionFieldEditorView.vue')
            },
            {
                path: 'app/version/link/edit/:app/:version/:index?',
                name: 'adminAppVersionLinkEdit',
                component: () => import('../view/admin/app/AppVersionLinkEditorView.vue')
            },
            {
                path: 'app/version/edit/:app/:index?',
                name: 'adminAppVersionEdit',
                component: () => import('../view/admin/app/AppVersionEditorView.vue')
            },
            {
                path: 'app/edit/:index?',
                name: 'adminAppEdit',
                component: () => import('../view/admin/app/AppEditorView.vue')
            },
            {
                path: 'check',
                name: 'adminCheck',
                component: () => import('../view/admin/CheckView.vue')
            },
            {
                path: 'p12',
                name: 'adminP12',
                component: () => import('../view/admin/P12View.vue')
            },
            {
                path: 'version',
                name: 'adminVersion',
                component: () => import('../view/admin/VersionView.vue')
            },
            {
                path: 'p12/edit/:index?',
                name: 'adminP12Edit',
                component: () => import('../view/admin/p12/P12EditorView.vue')
            },
            {
                path: 'about',
                name: 'adminAbout',
                component: () => import('../view/admin/AboutView.vue')
            },
            {
                path: 'auth',
                name: 'adminAuth',
                component: () => import('../view/admin/AuthView.vue')
            },
            {
                path: 'about/edit/:index?',
                name: 'adminAboutEdit',
                component: () => import('../view/admin/about/AboutEditorView.vue')
            },
        ]
    },
    {
        path: '/home/:name?',
        name: 'home',
        component: HomeView,
    }, {
        path: '/check',
        name: 'check',
        component: () => import('../view/CheckView.vue')
    }, {
        path: '/source',
        name: 'source',
        component: () => import('../view/SourceView.vue')
    }, {
        path: '/install',
        name: 'install',
        component: () => import('../view/InstallView.vue')
    }, {
        path: '/ipa',
        name: 'ipa',
        component: () => import('../view/IpaView.vue')
    }, {
        path: '/report',
        name: 'report',
        component: () => import('../view/ReportView.vue')
    }, {
        path: '/about',
        name: 'about',
        component: () => import('../view/AboutView.vue')
    }, {
        path: '/:catchAll(.*)',
        component: () => import('../view/NotFoundView.vue')
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router