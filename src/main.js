import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/router.js'
import './assets/reset.scss'

createApp(App)
.use(router)
.mount('#app')