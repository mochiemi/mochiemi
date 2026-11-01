import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Registra TODOS os ícones e o componente <OhVueIcon> globalmente
import { OhVueIcon } from '@/plugins/icons'

import '@/assets/styles/variables.css'
import '@/assets/styles/global.css'

const app = createApp(App)

app.component('OhVueIcon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
