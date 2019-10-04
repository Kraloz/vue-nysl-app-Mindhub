import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Matches from './views/Matches.vue'
import Charts from './views/Charts.vue'
import Locations from './views/Locations.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations
    }
  ]
})
