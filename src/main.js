import '@/assets/css/tailwind.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('v-icon', Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
