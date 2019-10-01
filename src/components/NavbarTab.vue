<template>
  <router-link
      class="flex-1 flex justify-center items-center outline-none opacity-50"
      :to="to">
      <v-icon :name="icon" scale="1.45"/>
    </router-link> 
</template>

<script>
export default {
  name: 'NavbarTab',
  props: ['to', 'icon']
}
</script>

<style>
  .router-link-active {
    @apply opacity-100;
  }
</style>