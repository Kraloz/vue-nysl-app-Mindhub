<template>
  <div id="app" class="h-full">
    <the-appbar id="appbar" class="z-50"/>
    <router-view
      id="content"
      class="z-0 pt-24 pb-12 min-h-screen h-full w-full container"/>
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
  }
}

</script>
