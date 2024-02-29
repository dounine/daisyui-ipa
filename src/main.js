import {createApp} from 'vue'
import MyAxios from './myaxios'
import './style.scss'
import 'virtual:vite-svg-2-webfont.css'
import App from './App.vue'
import router from './router.js'
import {Axios} from "axios";

const app = createApp(App)
app.config.globalProperties.axios = MyAxios
app.use(router)
app.mount('#app')
