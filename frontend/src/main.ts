import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './services/api' // Adicione esta linha
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { LaUserAltSolid, BiChevronDown } from 'oh-vue-icons/icons'

addIcons(LaUserAltSolid, BiChevronDown)

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(router)

app.config.globalProperties.$api = api // Adicione esta linha

app.mount('#app')
