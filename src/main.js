import './assets/main.css'
import './assets/font.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Tambahkan icons library
library.add(faMagnifyingGlass, faBars)

// Buat aplikasi
const app = createApp(App)

// Registrasi komponen FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon)

// Mount aplikasi sekali saja
app.mount('#app')