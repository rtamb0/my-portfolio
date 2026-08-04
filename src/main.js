import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'
import WebsiteCard from './components/WebsiteCard.vue'

const app = createApp(App)

app.use(createPinia()).use(router).component('WebsiteCard', WebsiteCard)

app.mount('#app')
