import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/router.js'
import './assets/sass/main.scss'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPluginPersist)

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')