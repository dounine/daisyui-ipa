import {createApp} from 'vue'
import './style.scss'
import 'virtual:vite-svg-2-webfont.css'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
