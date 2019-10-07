import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Matches from './views/Matches.vue'
import Charts from './views/Charts.vue'
import Locations from './views/Locations.vue'
import Fixture from './views/Fixture.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { index: 0 }
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches,
      meta: { index: 0 }
    },
    {
      path: '/matches/:month',
      name: 'fixture',
      component: Fixture,
      meta: { index: 1 }
    },
    {
      path: '/charts',
      name: 'charts',
      component: Charts,
      meta: { index: 0 }
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations,
      meta: { index: 0 }
    }
  ]
})
