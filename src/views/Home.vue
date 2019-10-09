<template>
  <div class="home">
    <div class="match-group h-full flex flex-col justify-center">
      <match-card 
        title="Next Match"
        :match="response.match1"
        />
      <hr class="mx-auto w-5/6 border-1 border-gray-500">
      <match-card 
        title="Last Match"
        :match="response.match2"
        />
    </div>
  </div>
</template>

<script>
import MatchCard from '@/components/MatchCard.vue'
export default {
  name: 'home',
  components: {
    MatchCard
  },
  data() {
    return {
      response: {
        match1: {
          teamA: {
            logo: 'http://localhost:8080/img/boca.b276bd53.png',
            score: 1,
          },
          teamB: {
            logo: 'http://localhost:8080/img/boca.b276bd53.png',
            score: 1,
          },
          location: 'Delgado 769',
          date: '15/24/2019',
          time: '13:00 PM'
        },
        match2: {
          teamA: {
            logo: 'http://localhost:8080/img/boca.b276bd53.png',
            score: 1,
          },
          teamB: {
            logo: 'http://localhost:8080/img/boca.b276bd53.png',
            score: 1,
          },
          location: 'Delgado 769',
          date: '11/10/2019',
          time: '13:00 PM'
        },
      }
    }
  }
}
</script>

<style scoped>
  .match-group > div {
    @apply my-8
  }
</style>
