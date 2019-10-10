<template>
  <div class="overflow-y-scroll">
    <matches-month-tab/>
  </div>
</template>

<script>
import MatchesMonthTab from '@/components/MatchesMonthTab.vue'

export default {
  name: 'Matches',
  components: {
    MatchesMonthTab
  }
}
</script>
