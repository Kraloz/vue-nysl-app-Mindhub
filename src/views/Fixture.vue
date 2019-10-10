<template>
  <div class="mt-4 pb-32 overflow-y-scroll">
    <ul class="w-full pl-20 flex flex-col text-2xl">
      <li
        v-for="(month, i) in months" :key="i"
        class="w-full justify-between items-center tracking-tight w-full h-full flex-1 my-2 border-solid border-b border-gray-600"
      >
        <match-fixture-card :id="i"/>
      </li>
    </ul>
  </div>
</template>

<script>
import MatchFixtureCard from '@/components/MatchFixtureCard.vue'

export default {
  name: 'Fixture',
  components: {
    MatchFixtureCard
  },
  data () {
    return {
      'months': ['October', 'November', 'December', 'January','October', 'November', 'December', 'January']
    }
  }
}
</script>
