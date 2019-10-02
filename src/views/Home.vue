<template>
  <div class="home">
    <div class="match-group h-full flex flex-col justify-center">
      <MatchInfoCard/>
      <hr class="mx-auto w-5/6 border-1 border-gray-500">
      <MatchInfoCard/>
    </div>
  </div>
</template>

<script>
import MatchInfoCard from '@/components/MatchInfoCard.vue'

export default {
  name: 'home',
  components: {
    MatchInfoCard
  }
}
</script>

<style scoped>
  .match-group > div {
    @apply my-8
  }
</style>