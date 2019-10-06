<template>
  <router-link :to="{ name: 'fixture', params: { 'month': month.toLowerCase() }}"
    class="flex ml-4 py-4 h-full w-full items-center justify-between">
    {{ month }}
    <div class="mr-10">
      <v-icon class=" opacity-75" name="info" scale="1.45"/>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'MatchFixtureCard'
}
</script>
