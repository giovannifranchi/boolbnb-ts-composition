import '@/assets/index-ts/index'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight, fa5, faChevronUp, faChevronDown, faCircleUser, faTrash, faFaceSadCry, faPaperPlane, faMagnifyingGlass, faPersonSwimming, faSliders, faUtensils, faBaby, faHandshake, faBicycle, faSpa, faTableTennisPaddleBall, faBasketball, faCarOn, faPersonHiking, faDumbbell, faLanguage, faChildren, faWifi, faMugSaucer, faSquareParking, faBellConcierge, faVanShuttle, faInfo, faJugDetergent, faCampground, faPaw, faSnowflake } from '@fortawesome/free-solid-svg-icons'

import Toast, { POSITION } from 'vue-toastification'

import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

library.add( faChevronLeft, faChevronRight, fa5, faChevronUp, faChevronDown, faCircleUser, faTrash, faFaceSadCry, faPaperPlane, faMagnifyingGlass, faPersonSwimming, faSliders, faUtensils, faBaby, faHandshake, faBicycle, faSpa, faTableTennisPaddleBall, faBasketball, faCarOn, faPersonHiking, faDumbbell, faLanguage, faChildren, faWifi, faMugSaucer, faSquareParking, faBellConcierge, faVanShuttle, faInfo, faJugDetergent, faCampground, faPaw, faSnowflake)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VueApexCharts', VueApexCharts)

app.use(createPinia())
app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT })

app.mount('#app')
