<template>
  <div class="mx-6">
    <h2 class="pl-12 font-display opacity-75 text-lg">{{ title }}</h2>
    <div class="flex items-center justify-center">
      <img class="mx-4 w-20" :src="match.teamA.logo" alt="Team logo">
      <div class="w-10 flex score justify-between">
        <span>{{ match.teamA.score }}</span>
        <span>:</span>
        <span>{{ match.teamB.score }}</span>
      </div>
      <img class="mx-4 w-20" :src="match.teamB.logo" alt="Team logo">
    </div>
    <div class="flex flex-col items-center">
      <time class="opacity-75" :datetime="match.date">{{ `${match.date} , ${match.time}` }}</time>
      <span class="opacity-75">{{ match.location }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchCard',
  props: ['title', 'match']
}
</script>
