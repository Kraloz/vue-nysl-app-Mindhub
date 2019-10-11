<template>
  <div class="overflow-x-hidden overflow-y-scroll">
    <matches-month-tab/>
  </div>
</template>

<script>
import MatchesMonthTab from '@/components/MatchesMonthTab.vue'

export default {
  name: 'Matches',
  components: {
    MatchesMonthTab
  },
  methods: {
    toggleScrolleable () {
      document.body.classList.toggle('overflow-y-hidden')
      document.body.classList.toggle('overflow-y-scroll')
    }
  },
  created () {
    this.toggleScrolleable()
  },
  destroyed () {
    this.toggleScrolleable()
  }
}
</script>
