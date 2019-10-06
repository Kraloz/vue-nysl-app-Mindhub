<template>
  <div class="pt-4">
    <ul class="w-full pl-20 flex flex-col text-2xl">
      <li
        v-for="(month, i) in months" :key="i"
        class="tracking-tight w-full h-full flex-1 my-2 border-solid border-b border-gray-600"
      >
        <router-link :to="{ name: 'fixture', params: { 'month': month.toLowerCase() }}"
          class="h-full w-full block ml-4 py-4">
          {{ month }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MatchesMonthTab',
  data () {
    return {
      'months': ['October', 'November', 'December', 'January']
    }
  }
}
</script>
