<template>
    <div class="xd absolute">
      <gmap-map
        class="h-full"
        :center="{lat:10, lng:10}"
        :zoom="7"
        :options="{disableDefaultUI:true}"
        map-type-id="terrain"
      >
      </gmap-map>
    </div>
</template>

<script>

// style="/*!width:100%; height:100%; max-height: 100%;min-height: 100%;*/"
export default {
  name: 'Locations'
}
</script>

<style scoped>
  .vue-map-container,
  .vue-map-container .vue-map {
    /* border: 5px solid black; */
    height: 100%;
    /* max-height: 100%;
    min-height: 100%; */
    /* width: 100%; */
    /* padding-bottom: 50px; */
    /* display:block;
    z-index: 1; */
  }
</style>
