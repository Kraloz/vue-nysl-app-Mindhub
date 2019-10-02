<template>
  <div id="navbar" class="bg-harlequin fixed inset-x-0 bottom-0 h-12 container flex">
    <navbar-tab to="/home" icon="home"/>
    <navbar-tab to="/matches" icon="futbol"/>
    <navbar-tab to="/charts" icon="chart-bar"/>
    <navbar-tab to="/locations" icon="map-marked-alt"/>
  </div>
</template>

<script>
import NavbarTab from '@/components/NavbarTab.vue'

export default {
  name: 'TheNavbar',
  components: {
    NavbarTab
  }
}
</script>

<style scoped>
  #navbar {
    border-radius: 1.25rem 1.25rem 0 0;
  }
  
</style>
