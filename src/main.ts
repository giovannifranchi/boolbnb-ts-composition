import '@/assets/index-ts/index'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Toast, { POSITION } from 'vue-toastification'

import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

library.add( faChevronLeft, faChevronRight)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VueApexCharts', VueApexCharts)

app.use(createPinia())
app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT })

app.mount('#app')
