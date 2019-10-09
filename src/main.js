import '@/assets/css/tailwind.css'
import '@/assets/css/transitions.css'

import * as VueGoogleMaps from 'vue2-google-maps'

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/futbol'
import 'vue-awesome/icons/chart-bar'
import 'vue-awesome/icons/map-marked-alt'
import 'vue-awesome/icons/info'
import 'vue-awesome/icons/map-marker-alt'
import 'vue-awesome/icons/chevron-up'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_G_KEY,
    libraries: 'places'
  }
})

Vue.component('v-icon', Icon)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
