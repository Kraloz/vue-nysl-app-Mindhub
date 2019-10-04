<template>
  <div>
    <h2 class="pl-12 text-lg">Next Match</h2>
    <div class="flex items-center justify-center">
      <img class="mx-4 w-20" src="@/assets/images/boca.png" alt="">
      <div class="w-10 flex score justify-between">
        <span>4</span>
        <span>:</span>
        <span>6</span>
      </div>
      <img class="mx-4 w-20" src="@/assets/images/boca.png" alt="">
    </div>
    <div class="flex flex-col items-center">
      <time class="text-gray-700" datetime="2019-10-28 13:00">28/10, 13:00 PM</time>
      <span class="text-gray-700">AJ Katzenmaier</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchInfoCard'
}
</script>
