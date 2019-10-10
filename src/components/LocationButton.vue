<template>
  <button class="flex py-4 flex-col border border-b border-black rounded-lg text-left">
    <h5 class="ml-6 text-lg">{{ location.name }}</h5>
      <h6 class="ml-10 text-xs">{{ location.address }}</h6>
  </button>
</template>

<script>
export default {
  name: 'LocationButton',
  props: ['location']
}
</script>
