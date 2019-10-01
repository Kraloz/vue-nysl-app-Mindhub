<template>
  <div id="app">
    <the-appbar/>
    <router-view/>
    <the-navbar/>
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
