<template>
  <router-link
    :to="{ name: 'fixture', params: { 'month': month.toLowerCase() }}"
    class="flex ml-4 py-4 h-full w-full items-center justify-between"
  >
    <div class="flex flex-col justify-center">
      <div class="text-xl">
        Team 1
        <span class="text-blue-600">VS</span>
        Team 2
       </div>
      <span class="text-base text-gray-700">AJ Katzenmaier</span>
      <time class="text-base text-gray-700" datetime="2019-10-28 13:00">28/10, 13:00 PM</time>
    </div>
    <div class="mr-10"><v-icon class="opacity-75" name="info" scale="1.45"/></div>
  </router-link>
</template>

<script>
export default {
  name: 'MatchFixtureCard',
  props: ['month']
}
</script>
