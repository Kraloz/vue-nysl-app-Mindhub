<template>
  <div>
    <ul class="w-full mt-4 text-2xl ml-20 w-full flex flex-col">
      <li
        v-for="(month, i) in months" :key="i"
        class=" w-full h-full flex-1 my-2 border-solid border-1 border-gray-600">
        <router-link to="/home"
          class="h-full w-full block ml-4 py-4">
          {{ month }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FixtureMonth',
  data () {
    return {
      'months': ['October', 'November', 'December', 'January']
    }
  }
}
</script>

<style>
ul > li {
    border-bottom: 1px solid black;
  }
</style>
