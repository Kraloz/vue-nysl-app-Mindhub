<template>
  <div id="app" class="h-full">
    <the-appbar/>
    <router-view class="pt-2 h-full container"/>
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
