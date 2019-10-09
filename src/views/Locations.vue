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
    <div class="solapa w-full flex h-8 bg-mercury justify-center items-center">
      <v-icon name="chevron-up" scale="1.45"/>
    </div>
  </div>
</template> 

<script>

// style="/*!width:100%; height:100%; max-height: 100%;min-height: 100%;*/"
export default {
  name: 'Locations'
}
</script>

<style scoped>

  .solapa {
    position: absolute;
    overflow-y: hidden;
    margin-top: -2rem;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -1px 20px rgba(0,0,0,0.19), 0 -4px 6px rgba(0,0,0,0.23);
  }

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
