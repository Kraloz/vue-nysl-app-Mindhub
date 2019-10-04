<template>
  <div>
    <ul class="w-full mt-4 pl-20 flex flex-col text-2xl">
      <li
        v-for="(month, i) in months" :key="i"
        class="w-full h-full flex-1 my-2 border-solid border-b border-gray-600"
      >
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
