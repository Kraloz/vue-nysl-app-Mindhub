import '@/assets/css/tailwind.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import * as VueGoogleMaps from 'vue2-google-maps'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDnaA-js0O-9nIujHrUGIvLwhhLLQrKWOo',
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
