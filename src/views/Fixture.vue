<template>
  <div class="pt-4">
    <ul class="w-full pl-20 flex flex-col text-2xl">
      <li
        v-for="(month, i) in months" :key="i"
        class="w-full justify-between items-center tracking-tight w-full h-full flex-1 my-2 border-solid border-b border-gray-600"
      >
        <router-link :to="{ name: 'fixture', params: { 'month': month.toLowerCase() }}"
          class="flex ml-4 py-4 h-full w-full items-center justify-between">
          {{ month }}
          <div class="mr-10">
          <v-icon class=" opacity-75" name="info" scale="1.45"/>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import MatchFixtureCard from "@/components/MatchFixtureCard.vue"

export default {
  name: 'Fixture',
  components: {
    MatchFixtureCard
  },
  data () {
    return {
      'months': ['October', 'November', 'December', 'January']
    }   
  }
}
</script>
