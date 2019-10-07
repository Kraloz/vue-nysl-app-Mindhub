<template>
  <div id="app" class="h-full">
    <the-appbar id="appbar" class="z-50"/>
      <transition :name="transitionName">
        <router-view
          id="content"
          class="z-0 pt-24 pb-12 min-h-screen h-full w-full container"
        />
      </transition>
    <the-navbar id="navbar" class="z-50"/>
  </div>
</template>

<script>
import TheAppbar from '@/components/Appbar.vue'
import TheNavbar from '@/components/Navbar.vue'

export default {
  components: {
    TheAppbar,
    TheNavbar
  },
  data () {
    return {
      transitionName : 'none'
    }
  },
  watch: {
    $route(to, from) {
      let toRoute = to.meta.index
      let fromRoute = from.meta.index
      if (toRoute === fromRoute || fromRoute === toRoute) {
        this.transitionName = 'none'
      } else if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>
