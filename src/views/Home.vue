<template>
  <div class="home">
    <div class="match-group h-full flex flex-col justify-center">
      <next-match-card/>
      <hr class="mx-auto w-5/6 border-1 border-gray-500">
      <next-match-card/>
    </div>
  </div>
</template>

<script>
import NextMatchCard from '@/components/NextMatchCard.vue'
export default {
  name: 'home',
  components: {
    NextMatchCard
  }
}
</script>

<style scoped>
  .match-group > div {
    @apply my-8
  }
</style>
