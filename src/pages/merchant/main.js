import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './src/App.vue'
import { installRouter } from "./src/router";

const app = createApp(App)

app.use(createPinia())
app.use(installRouter)

app.mount('#app')
